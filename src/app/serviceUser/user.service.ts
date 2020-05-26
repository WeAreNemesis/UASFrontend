import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from './User';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url: string = "http://localhost:3000/users/";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  public getUser(name: string, password: string): any {
    let user = null;
    this.getUsers().subscribe(data=>{
      user = data;
    });
    return user;
  }

  public addUser(user: User): Observable<User> {
    const url = `${this._url}`;
    return this.http.post<User>(url, user).pipe(
      catchError(this.handleError)
    );
  }

  public updateUser(user: User): Observable<User> {
    const url = `${this._url}/${user.id}`;
    return this.http.put<User>(url, user).pipe(
      catchError(this.handleError)
    );
  }

  public deleteUser(id: number): Observable<User> {
    console.log(id);
    const url = `${this._url}/${id}`;
    return this.http.delete<User>(url).pipe(
      catchError(this.handleError)
    );
  }


}
