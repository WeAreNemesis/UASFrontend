import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../serviceValidation/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = "User";
  constructor(private _validationService: ValidationService, private route: Router) { 
   
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
    } else {
      this.user = "User";
    }
  }
}
