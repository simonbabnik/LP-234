import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert = {
    hidden: true,
    type: 'danger',
    message: 'Nekaj je šlo narobe :('
  };

  files: {documentID: string, profilePicture: string} = {
    documentID: undefined,
    profilePicture: undefined
  }

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(undefined, [Validators.required]),
    surname: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required]),
    passwordConfirm: new FormControl(undefined, [Validators.required]),
    birthday: new FormControl(undefined, [Validators.required]),
    documentID: new FormControl(undefined, [Validators.required]),
    profilePicture: new FormControl(undefined),
    role: new FormControl(undefined)
  });

  constructor(
    private readonly authService: AuthorizationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  passwordMatch(pass1: string, pass2: string): boolean {
    if (pass1 && pass2 && pass1 === pass2) { return true; }
    else { return false; }
  }

  onSubmit(): void {
    // tslint:disable-next-line:max-line-length
    if (this.registerForm.valid) {
      if (this.passwordMatch(this.registerForm.get('password')?.value, this.registerForm.get('passwordConfirm')?.value)) {
        // Role
        let role = 'lastnik';
        if (this.registerForm.get('role')?.value === true) {
          role = 'sprehajalec';
        }
        const registerData = {
          ime: this.registerForm.get('firstName')?.value,
          priimek: this.registerForm.get('surname')?.value,
          email: this.registerForm.get('email')?.value,
          geslo: this.registerForm.get('password')?.value,
          datumRojstva: this.registerForm.get('birthday')?.value,
          slika_dokumenta: this.files.documentID,
          slika_profila: this.files.profilePicture,
          tip_racuna: role
        };

        let registerFormData = RegisterComponent.convertToFormData(registerData);
        console.log(registerFormData)
        this.authService.registration(registerFormData)
          .then(() => {
            this.router.navigate(['/']);
          })
          .catch(sporocilo => this.handleError(sporocilo));
      }
      else {
        this.showAlert('Vneseni gesli se ne ujemata.');
      }
    }

    /*// preveri geslo
    const form = new FormData();
    form.append('ime', this.registerForm.get('firstName').value);
    form.append('priimek', this.registerForm.get('surname').value);
    form.append('email', this.registerForm.get('email').value);
    form.append('geslo', this.registerForm.get('password').value);
    form.append('birthday', this.registerForm.get('birthday').value); // spremeni
    form.append('slika_dokumenta', this.registerForm.get('documentID').value);
    form.append('slika_profila', this.registerForm.get('profilePicture').value);
    form.append('tip_racuna', this.registerForm.get('role').value);
    console.log(form);*/
  }

  // Needed because server cannot read large "query" POST style data
  private static convertToFormData(data: any) {
    const form = new FormData();
    for (let key in data) {
      form.append(key, data[key]);
    }
    return form;
   }

  /* File encoding */
  public encodeFile(event: any, type: string) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      if(type === 'documentID') {
        this.files.documentID = reader.result.toString();
      }
      else if(type === 'profilePicture') {
        this.files.profilePicture = reader.result.toString();
      }

    }
    reader.readAsDataURL(file);
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
