import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UporabnikiService } from 'src/app/services/uporabniki.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private uporabnikService: UporabnikiService, private router: Router) { }

  jeAdmin: boolean = true;
  jeVerifier: boolean = false;
  id: string = "";
  jePrijavljen: boolean = false;

  ngOnInit(): void {
    this.id = this.authorizationService.getId()["_id"]
    console.log(this.id)
    if(this.authorizationService.getId()["tipRacuna"] == "admin") {
      this.jeAdmin = true
    }
    if(this.authorizationService.getId()["tipRacuna"] == "potrjevalec") {
      this.jeVerifier = true
    }
    this.jePrijavljen = this.authorizationService.jePrijavljen()

    this.authorizationService.Prijavljen.subscribe(data => {
      this.jePrijavljen = data;
    })
    
  }

  logout() {
    this.authorizationService.logout();
    this.router.navigate([''])
  }


}
