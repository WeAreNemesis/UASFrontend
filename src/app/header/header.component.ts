import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../serviceValidation/validation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = "User";
  log = "Login";
  constructor(private _validationService: ValidationService, private route: Router) {
    route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url === "/admin" || event.url === "/mac") this.setUserName();
    });
  }

  ngOnInit(): void {
    this.setUserName();
  }

  logout(): void {
    this._validationService.logout();
    this.setUserName();
    this.route.navigate(['/home']);
  }

  setUserName(): void {
    let role = JSON.parse(localStorage.getItem('user'));
    if (role) {
      this.user = role.name;
      this.log = "Logout";
    } else {
      this.user = "User";
      this.log = "Login";
    }
  }
}
