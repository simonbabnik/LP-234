import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert = {
    hidden: true,
    type: 'danger',
    message: 'Something went wrong!'
  };

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(undefined, [Validators.required, Validators.email]),
    password: new FormControl(undefined, [Validators.required]),
  });

  constructor(
    private readonly authService: AuthorizationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Null checks
      const email = this.loginForm.get('email')?.value;
      const pass = this.loginForm.get('password')?.value;
      if (email !== undefined && pass !== undefined) {
        this.authService.login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('password')?.value)
          .then(() => {
            this.router.navigate(['profile', this.authService.getId()["_id"]]);
          })
          .catch(sporocilo => this.handleError(sporocilo));
      }
    }
    else {
      console.log('Login data are not valid.');
    }
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
