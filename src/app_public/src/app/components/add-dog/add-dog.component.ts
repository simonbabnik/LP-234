import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DogApiResult } from 'src/app/classes/dog-api-result';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css']
})
export class AddDogComponent implements OnInit {

  public dogForm: FormGroup = new FormGroup({
    ime: new FormControl(undefined, [Validators.required]),
    pasma: new FormControl(undefined, [Validators.required]),
    opis: new FormControl(undefined, [Validators.required]),
  });
  breeds: Array<DogApiResult> = [];
  selectedBreed: any;
  valid: boolean = false;

  constructor(private dogService: DogService,
              private router: Router,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.dogService.getAllBreeds().then((result) => {
      this.breeds = result;
    });
  }

  onSubmit() {
    console.log(this.dogForm.value)
    this.dogService.addDog(this.authorizationService.getId()["_id"], this.dogForm.value).finally(() => {
      this.router.navigate(['/'], {state: {origin: 'add_dog'}})
    })
    
  }

}
