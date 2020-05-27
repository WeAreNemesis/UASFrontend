import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../serviceUser/User';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    // navigate to login page as user is not authenticated      
    this.router.navigate(['/login']);
    return false;
  }
  public isLoggedIn(): boolean {
    let status = false;
    let role = localStorage.getItem('role');
    //console.log(role);
    if (role) {
      return (role==="admin") ? true:false;
    }
    return false;
  }
}
