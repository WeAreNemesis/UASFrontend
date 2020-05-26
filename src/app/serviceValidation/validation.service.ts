import { Injectable } from '@angular/core';
import { UserService } from '../serviceUser/user.service';
import { User } from '../serviceUser/User';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() {

  }

  public authenticate(name: string, password: string, users: User[]): string {
    let user = users.find(user => {
      return (name === user.name && password === user.password) ? true : false;
    });
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', user.role);
    }else{
      localStorage.setItem('user', JSON.stringify(null));
    }
    return (user) ? user.role : "login";
  }

  public logout():void{
    localStorage.removeItem('role');   
    localStorage.removeItem('user');   
  }

}
