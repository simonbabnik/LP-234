import { Component, OnInit } from '@angular/core';
import { LocationApiResult } from "../../classes/location-api-result";
import { LocationService } from "../../services/location.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PostsService } from "../../services/posts.service";
import { Router } from "@angular/router";
import { AuthorizationService } from "../../services/authorization.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  locations: LocationApiResult[];

  alert = {
    hidden: true,
    type: 'danger',
    message: 'Something went wrong!'
  };

  public addPostForm: FormGroup = new FormGroup({
    postTitle: new FormControl(undefined, [Validators.required]),
    postLocation: new FormControl(undefined, [Validators.required]),
    postPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
    postDescription: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    private readonly locationService: LocationService,
    private readonly postsService: PostsService,
    private readonly router: Router,
    private readonly authService: AuthorizationService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.locationService.getLocationsSortedByName()
      .then(data => {
        this.locations = data;
      })
      .catch(error => this.handleError(error));
  }

  public addPost() {
    if (this.addPostForm.valid) {
      let post = {
        id_uporabnik: this.getUserId(),
        naziv: this.addPostForm.get('postTitle').value,
        cena: this.addPostForm.get('postPrice').value,
        kraj: this.addPostForm.get('postLocation').value,
        opis: this.addPostForm.get('postDescription').value
      }
      this.postsService.addPost(post)
        .then(() => {
          this.location.back()
          //this.router.navigate(['/']);
        })
        .catch(response => this.handleError(response))
    } else {
      this.handleError('The form is not valid. All fields are required.');
    }
  }

  private getUserId() {
    // @ts-ignore
    const {_id} = this.authService.getId();
    return _id;
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
