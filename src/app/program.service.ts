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

  public addProgram(program:Program):Observable<Program> {
    const url = `${this._url}`;
    return this.http.post<Program>(url,program).pipe(
      catchError(this.handleError)
    );
  }

  public updateProgram(program:Program):Observable<Program> {
    const url = `${this._url}/${program.id}`;
    return this.http.put<Program>(url,program).pipe(
      catchError(this.handleError)
    );
  }

  public deleteProgram(id: number): Observable<Program> {
    console.log(id);
    const url = `${this._url}/${id}`;
    return this.http.delete<Program>(url).pipe(
      catchError(this.handleError)
    );
  }


}

