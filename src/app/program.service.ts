import { Injectable } from '@angular/core';
import { Program } from './Program';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  _url: string = "http://localhost:3000/programs/";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  public getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this._url);
  }

  public deleteProgram(id: number): Observable<Program> {
    console.log(id);
    const url = `${this._url}/${id}`;
    return this.http.delete<Program>(url).pipe(
      catchError(this.handleError)
    );
  }
}

