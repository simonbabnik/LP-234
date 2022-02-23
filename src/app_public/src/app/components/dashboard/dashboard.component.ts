import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Uporabnik } from 'src/app/classes/uporabnik';
import { UporabnikiService } from 'src/app/services/uporabniki.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: Array<Uporabnik> = [];


  constructor(private uporabnikiService: UporabnikiService, private router: Router) {

  }

  ngOnInit(): void {
    this.uporabnikiService.getAllUsers().then((result) => {
      this.users = result["uporabniki"];
    }
    )
  }

  preusmeri(user: Uporabnik) {
    this.router.navigate(["profile", user._id], {state: {id: user._id}})
  }

  deleteUser(user: Uporabnik) {
    this.uporabnikiService.deleteUser(user);
    this.users = [];
    this.uporabnikiService.getAllUsers().then((result) => {
      this.users = result["uporabniki"];
    }
    )
  }

}
