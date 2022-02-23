import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyComponent } from './components/verify/verify.component';
import { LoginComponent } from './components/login/login.component';
import { AddDogComponent } from './components/add-dog/add-dog.component';
import { RegisterComponent } from './components/register/register.component';
import { AddPostComponent } from "./components/add-post/add-post.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'profile/:idUporabnika',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['admin','potrjevalec', 'sprehajalec', 'lastnik']},
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['admin']},
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'verify',
    component: VerifyComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['admin','potrjevalec']},
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add_dog',
    component: AddDogComponent
  },
  {
    path: 'add_post',
    component: AddPostComponent,
    canActivate: [AuthGuard],
    data: { permissions: ['sprehajalec']},
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
