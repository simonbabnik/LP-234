import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerifyComponent } from './components/verify/verify.component';
import { StarsPipe } from './pipes/stars.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AddPostComponent } from './components/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    DashboardComponent,
    VerifyComponent,
    StarsPipe,
    LoginComponent,
    AddDogComponent,
    RegisterComponent,
    ModalConfirmComponent,
    AddPostComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
