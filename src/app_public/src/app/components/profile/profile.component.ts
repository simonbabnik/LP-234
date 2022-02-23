import { Component, OnInit } from '@angular/core';
import { Uporabnik } from '../../classes/uporabnik';
import { Pes } from '../../classes/pes';
import { DogService } from '../../services/dog.service';
import { DogApiResult } from 'src/app/classes/dog-api-result';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';
import { UporabnikiService } from 'src/app/services/uporabniki.service';
import { getPositionOfLineAndCharacter } from 'typescript';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from 'src/app/services/posts.service';
import { Oglas } from 'src/app/classes/oglas';
import { LocationService } from 'src/app/services/location.service';
import { LocationApiResult } from 'src/app/classes/location-api-result';
import { Ocena } from 'src/app/classes/ocena';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  alert = {
    hidden: true,
    type: 'danger',
    message: 'Something went wrong!'
  };

  dogEditForm: FormGroup = new FormGroup({
    ime: new FormControl(undefined, [Validators.required]),
    priimek: new FormControl(undefined, [Validators.required]),
    opis: new FormControl(undefined, [Validators.required]),
    userID: new FormControl(undefined),
  });
  postEditForm: FormGroup = new FormGroup({
    postTitle: new FormControl(undefined, [Validators.required]),
    postLocation: new FormControl(undefined, [Validators.required]),
    postPrice: new FormControl(0, [Validators.required, Validators.min(0)]),
    postDescription: new FormControl(undefined, [Validators.required]),
    postID: new FormControl(undefined), // probably not the best way
    userID: new FormControl(undefined), // but it is what it is
  });
  dogEditForm1: FormGroup = new FormGroup({
    ime: new FormControl(undefined, [Validators.required]),
    pasma: new FormControl(undefined, [Validators.required]),
    opis: new FormControl(undefined, [Validators.required]),
    id: new FormControl(undefined, [Validators.required])
  });
  post: Oglas
  id: string;
  uporabnik: Uporabnik;
  showAddDog: boolean = false;
  breedData = {};
  usefulInfo: Array<DogApiResult> = [{
    bred_for: "Fetching data...",
    breed_group: "Fetching data...",
    height: {
      imperial: "Fetching data...",
      metric: "Fetching data..."
    },
    _id: -1,
    life_span: "Fetching data...",
    name: "Fetching data...",
    reference_image_id: "Fetching data...",
    temperament: "Fetching data...",
    weight: {
      imperial: "Fetching data...",
      metric: "Fetching data..."
    }
  }];

  newDog: Pes = new Pes();
  psi: Pes[] = [];
  tmp: Pes[] = [];
  oglasi: Oglas[] = [];
  ogl: Oglas[] = [];
  locations: LocationApiResult[];
  pes: Pes = new Pes();
  breeds: DogApiResult[] = [];
  imaId: boolean = false;
  idNavigate: string = "";

  constructor(private dogService: DogService,
              private authorizationService: AuthorizationService,
              private router: Router,
              private uporabnikService: UporabnikiService,
              private readonly modalService: NgbModal,
              private oglasiService: PostsService,
              private locationService: LocationService) {
                if(router.getCurrentNavigation().extras.state) {
                    this.imaId = true;
                    this.idNavigate = router.getCurrentNavigation().extras.state["id"]
                }
   }

  ngOnInit(): void {
    this.dogService.getAllBreeds().then((result) => {
      this.breeds = result;
    });
    this.locationService.getLocationsSortedByName()
      .then(data => {
        this.locations = data;
      });
      if(!this.authorizationService.jePrijavljen()) {
        this.router.navigate(['login']);
      }
      if(!this.imaId) {
        this.id = this.authorizationService.getId()["_id"];
        
      } else {
        this.id = this.idNavigate;

      }
      this.uporabnikService.getUser(this.id).then((result) => {
        this.uporabnik = result;
        console.log(this.uporabnik)
        if(this.uporabnik.tipRacuna == "lastnik") {
            this.getPse()
        } else if(this.uporabnik.tipRacuna == "sprehajalec") {
            this.getOglase()
        }
      });
      
      
  }

  getOglase() {
    this.oglasiService.getAllPosts().then(data=> {
      data.forEach(oglas => {
        if(oglas.id_uporabnik == this.id) {
          this.oglasi.push(oglas);
        }
      })
    })
  }

  getPse() {
    this.dogService.getPse().then(data=> {
      this.tmp = data["dogs"]
      var ids = this.uporabnik.psi;
      this.tmp.forEach(element=> {
        ids.forEach(ids => {
          
          if(element._id == ids) {
            this.psi.push(element);
          }
        })
      })
    
    })
  }

  startEdit(content: any) {
    this.alert.hidden = true;
    this.dogEditForm.patchValue({
        ime: this.uporabnik.ime,
        priimek: this.uporabnik.priimek,
        opis: this.uporabnik.opis,
        slikaProfila: this.uporabnik.slikaProfila,
        userID: this.authorizationService.getId()["_id"]
    })
    this.modalService.open(content, { centered: true, scrollable: true});
  }

  breedInfo(breed: string) {
    this.usefulInfo = [{
      bred_for: "Fetching data...",
      breed_group: "Fetching data...",
      height: {
        imperial: "Fetching data...",
        metric: "Fetching data..."
      },
      _id: -1,
      life_span: "Fetching data...",
      name: "Fetching data...",
      reference_image_id: "Fetching data...",
      temperament: "Fetching data...",
      weight: {
        imperial: "Fetching data...",
        metric: "Fetching data..."
      }
    }];
    this.breedData = this.dogService.getBreedInfo(breed).then((result) => {
      this.usefulInfo = result;
    });
    var popup = document.getElementById("myPopup");
    popup?.classList.toggle("show");
  }

  toggleAddDog() {
   document.getElementById("dogForm")?.classList.add("visible");
  }

  editProfile() {
    
    if(this.dogEditForm.valid) {
      console.log("hhe")
      this.uporabnik.ime = this.dogEditForm.get("ime").value;
      this.uporabnik.priimek = this.dogEditForm.get("priimek").value;
      this.uporabnik.opis = this.dogEditForm.get("opis").value;
      this.uporabnikService.editUser(this.uporabnik)
        .then(() => {
          // Update post client-side
          if(this.modalService.hasOpenModals()) {
            this.modalService.dismissAll('Edit post')
          }

        }
        )
    }
  }

  

  openEditDog(content: any, postID: string) {
    this.dogEditForm.setValue({
      ime: this.uporabnik.ime,
      priimek: this.uporabnik.priimek,
      opis: this.uporabnik.opis,
      slikaProfila: this.uporabnik.slikaProfila,
      userID: this.authorizationService.getId()["_id"]
  })
    this.alert.hidden = true;
    this.dogService.getPse().then(data => {
      this.tmp = data["dogs"]
      this.tmp.forEach(pesek => {
        console.log(pesek)
        if(pesek._id === postID) {
          this.pes = pesek;
        }
      })
      this.dogEditForm1.patchValue({
        ime: this.pes.ime,
        pasma: this.pes.pasma,
        opis: this.pes.opis,
        id: this.pes._id
      })
      this.modalService.open(content, { centered: true, scrollable: true});
      console.log(this.pes)
      console.log(this.dogEditForm1)
    })
    
  }

  openEdit(content: any, postID: string) {
    this.alert.hidden = true;
    
    this.oglasiService.getAllPosts().then(post =>{
      this.post = post.find((post: Oglas) => post._id === postID);
    }) 
    this.postEditForm.setValue({
      postTitle: this.post.naziv,
      postLocation: this.post.kraj,
      postPrice: this.post.cena,
      postDescription: this.post.opis,
      postID: postID,
      userID: this.post.id_uporabnik
    })
    this.modalService.open(content, { centered: true, scrollable: true});
  }

  deleteDog(dogID: string) {
    this.dogService.deleteDog(dogID);
    this.psi = [];
    this.getPse()
  }

  deletePost(postID: string) {
      this.oglasiService.deletePost(postID)
      this.router.navigate(['profile', this.id])
      this.oglasi = [];
      this.getOglase()
  }

  editPes() {
    console.log(this.dogEditForm1)
    if(this.dogEditForm1.valid) {
      let psek = {
        _id: this.dogEditForm1.get("id").value,
        ime: this.dogEditForm1.get("ime").value,
        pasma: this.dogEditForm1.get("pasma").value,
        opis: this.dogEditForm1.get("opis").value,
        ocene: [new Ocena],
        povprecnaOcena: 0,
        slika: ""
      }
      this.dogService.editDog(psek)
        .then(() => {
          // Update post client-side
          if(this.modalService.hasOpenModals()) {
            this.modalService.dismissAll('Edit dog')
          }
        })
        .catch(this.handleError);

    }
    else {
      this.handleError('The form is not valid. All fields are required.');
    }
    this.psi = [];
    this.getPse()
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
      this.oglasiService.editPost(post)
        .then(() => {
          // Update post client-side
          if(this.modalService.hasOpenModals()) {
            this.modalService.dismissAll('Edit post')
          }

          let displayedPost = this.oglasi.find((newPost: Oglas) => newPost._id === post._id);
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

  private readonly handleError = (error: any) => {
    console.log(error);
    this.showAlert(error);
  }
  showAlert(message: string): void {
    this.alert.message = message;
    this.alert.hidden = false;
  }

}
