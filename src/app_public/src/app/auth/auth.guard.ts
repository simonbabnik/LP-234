import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from "../services/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthorizationService,
    private readonly router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(route.data.permissions) {
      if(this.authService.jePrijavljen()) {
        // Get user's role
        let role = this.authService.getRole();
        // Check if role has permission
        for(let i=0; i<route.data.permissions.length; i++) {
          // Has permission
          if(role === route.data.permissions[i]) {
            return true;
          }
        }
        this.router.navigateByUrl('/');
        return false;
      }
      // Not logged in
      else {
        return false;
      }

    }
    else {
      // No special permissions required - everyone can view
      return true;
    }

  }
  
}
