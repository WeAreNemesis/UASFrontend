import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../serviceValidation/validation.service';
import { UserService } from '../serviceUser/user.service';
import { User } from '../serviceUser/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  loginForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private _validationService: ValidationService,
    private _userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onSubmit(form): void {
    if (form.valid) {
      let route = this._validationService.authenticate(form.value.name, form.value.password, this.users);
      // console.log(route);
      // console.log(localStorage.getItem('user'));
      this.route.navigate([`/${route}`]);
    }
  }
}
