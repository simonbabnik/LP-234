import { Component, OnInit } from '@angular/core';
import { Oglas } from "../../classes/oglas";
import { LocationService } from "../../services/location.service";
import { LocationApiResult } from "../../classes/location-api-result";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UporabnikiService } from "../../services/uporabniki.service";
import { Uporabnik } from "../../classes/uporabnik";
import { PostsService } from "../../services/posts.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {post} from "selenium-webdriver/http";
import {ModalConfirmComponent} from "../modal-confirm/modal-confirm.component";
import {AuthorizationService} from "../../services/authorization.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations: LocationApiResult[];
  posts: Oglas[];
  ratings: {userID: string, postID: string, rating: number}[] = [];
  postsPresent = true;
  sorting = false;

  detailsModal: {index: number, post: Oglas};
  modalUser: Uporabnik;

  // Pagination
  page = 1;
  pageSize = 10;

  postEditForm: FormGroup = new FormGroup({
    postTitle: new FormControl(undefined, [Validators.required]),
    postLocation: new FormControl(undefined, [Validators.required]),
    postPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
    postDescription: new FormControl(undefined, [Validators.required]),
    postID: new FormControl(undefined), // probably not the best way
    userID: new FormControl(undefined), // but it is what it is
  });

  alert = {
    hidden: true,
    type: 'danger',
    message: 'Something went wrong!'
  };

  constructor(
      private readonly locationService: LocationService,
      private readonly modalService: NgbModal,
      private readonly userService: UporabnikiService,
      private readonly postService: PostsService,
      private readonly authService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.locationService.getLocationsSortedByName()
      .then(data => {
        this.locations = data;
      });
    this.postService.getAllPosts()
      .then(data => {
        if(!data || data.length == 0) {
          this.postsPresent = false;
        }
        this.posts = data;
        this.fillRatingsArray();
      })
      .catch(error => {
        console.log(error);
      });

  }

  private fillRatingsArray() {
    // Reset ratings
    this.ratings = [];
    for(let i=0; i<this.posts.length; i++) {
      let userID = this.posts[i].id_uporabnik;
      let postID = this.posts[i]._id;
      this.pushIntoRatings(userID, postID); // async?
    }
    console.log(this.ratings);

  }

  private pushIntoRatings(userID: string, postID: string) {
    if(userID && userID != '') {
      this.getUser(userID)
        .then(data => {
          let rating = data.povprecnaOcena;
          console.log(rating);
          if(!rating) {
            rating = 0;
          }
          this.ratings.push({
            userID: data._id,
            postID: postID,
            rating: rating
          });
        })
        .catch(() => {
          this.ratings.push({
            userID: undefined,
            postID: postID,
            rating: -1
          });
        });
    }
    else {
      this.ratings.push({
        userID: undefined,
        postID: postID,
        rating: -2
      });
    }
  }

  /* Sorting */

  public filterByLocation() {
    this.sorting = true;
    let location = document.getElementById('filterLocation') as HTMLSelectElement;

    this.postService.getSortedByLocation(location.value)
      .then(data => {
        this.posts = data;
        this.fillRatingsArray();
      })
      .catch(error => console.log(error));
  }

  public sortByBestRated() {
    this.postService.getSortedByBestRated()
      .then(data => {
        this.posts = data;
        console.log(data);
        this.fillRatingsArray();
      })
      .catch(error => console.log(error));
  }

  /* View post */
  openDetails(content: any, index: number) {

    let post = this.posts[index];
    this.detailsModal = {
      index: index,
      post: post
    };
    if(post.id_uporabnik && post.id_uporabnik != '') {
      this.getUser(post.id_uporabnik)
        .then(data => {
          this.modalUser = data;
        })
        .catch(error => {
          console.log(error);
          this.modalUser = undefined;
        });
    }
    else {
      this.modalUser = undefined;
    }

    this.modalService.open(content, { centered: true, scrollable: true, size: 'lg'});

    // why? because some transition problems
    setTimeout(() =>{ this.setMap(index) }, 50);
    //this.setMap(index);
  }

  getUser(id: string): Promise<any> {
    return this.userService.getUser(id)
      .then(data => {
        return data as Uporabnik;
      })
      .catch(error => console.log(error));

  }

  getRole() {
    return this.authService.getRole();
  }

  isUserLoggedIn() {
    return this.authService.jePrijavljen();
  }

  getRating(userID: string) {
    if(userID) {
      let ratingObject = this.ratings.find((ratingObject: {userID: string, rating: number}) => ratingObject.userID === userID);
      if(ratingObject) {
        return ratingObject.rating;
      }
      else {
        return -1;
      }

    }
    else {
      return -1;
    }
  }

  setMap(index: number) {
    // Get post's location name
    let locationName = this.posts[index].kraj;
    // Find location
    let location = this.locations.find((location: any) => location.kraj === locationName);

    if(location) {
      // @ts-ignore - L is from Leaflet.js
      var map = L.map('mapid').setView([location.lat, location.lng], 12);
      // @ts-ignore
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      // @ts-ignore
      L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(locationName)
        .openPopup();
    }
  }

  /* Generic modal - contact, not logged in modal */
  openGenericModal(content: any) {
    this.modalService.open(content, { centered: true, scrollable: true});
  }

  /* Edit modal */
  openEdit(content: any, postID: string) {
    this.alert.hidden = true;
    let post = this.posts.find((post: Oglas) => post._id === postID);
    this.postEditForm.setValue({
      postTitle: post.naziv,
      postLocation: post.kraj,
      postPrice: post.cena,
      postDescription: post.opis,
      postID: postID,
      userID: post.id_uporabnik
    })
    this.modalService.open(content, { centered: true, scrollable: true});
  }

  editPost() {
    if(this.postEditForm.valid) {
      let post = {
        _id: this.postEditForm.get('postID').value,
        id_uporabnik: this.postEditForm.get('userID').value,
        naziv: this.postEditForm.get('postTitle').value,
        cena: this.postEditForm.get('postPrice').value,
        kraj: this.postEditForm.get('postLocation').value,
        opis: this.postEditForm.get('postDescription').value
      }
      this.postService.editPost(post)
        .then(() => {
          // Update post client-side
          if(this.modalService.hasOpenModals()) {
            this.modalService.dismissAll('Edit post')
          }

          let displayedPost = this.posts.find((newPost: Oglas) => newPost._id === post._id);
          displayedPost.naziv = post.naziv;
          displayedPost.kraj = post.kraj;
          displayedPost.cena = post.cena;
          displayedPost.opis = post.opis;
        })
        .catch(this.handleError);

    }
    else {
      this.handleError('The form is not valid. All fields are required. Price cannot be negative.');
    }
  }

  deletePost(postID: string) {
    this.openModal(postID);
  }

  /* Confirmation modal */

  openModal(postID: string) {
    const modalRef = this.modalService.open(ModalConfirmComponent);

    let data = {
      title: 'Delete post',
      action: ' delete this post',
      permanent: true,
      buttonName: 'Delete',
      form: false
    };

    modalRef.componentInstance.fromParent = data;

    // Delete!
    modalRef.result
      .then((result) => {
        if(result === 'Delete') {
          this.postService.deletePost(postID)
            .then(() => {
              // Remove from client-side
              this.posts = this.posts.filter((deletedPost: Oglas) => deletedPost._id !== postID);
              if(!this.posts || this.posts.length == 0) {
                this.postsPresent = false;
              }
              // Remove rating
              this.ratings = this.ratings.filter((rating: any) => rating.postID !== postID);
              console.log(this.ratings);
              console.log(this.posts);
            })
            .catch(this.handleError);
        }
      })
      .catch(error => {
      });

  }

  private readonly handleError = (error: any) => {
    console.log(error);
    this.showAlert(error);
  }

  /* Alerts */

  // Set and show alert
  showAlert(message: string): void {
    this.alert.message = message;
    this.alert.hidden = false;
  }

}
