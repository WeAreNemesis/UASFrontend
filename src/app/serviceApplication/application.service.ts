import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Application } from './Application';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  _url: string = "http://localhost:3000/applications/";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this._url);
  }

  public addApplication(application:Application):Observable<Application> {
    const url = `${this._url}`;
    return this.http.post<Application>(url,application).pipe(
      catchError(this.handleError)
    );
  }

  public updateApplication(application:Application):Observable<Application> {
    const url = `${this._url}/${application.id}`;
    return this.http.put<Application>(url,application).pipe(
      catchError(this.handleError)
    );
  }

  public deleteApplication(id: number): Observable<Application> {
    console.log(id);
    const url = `${this._url}/${id}`;
    return this.http.delete<Application>(url).pipe(
      catchError(this.handleError)
    );
  }


}
