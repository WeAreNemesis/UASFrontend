import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Schedule } from './Schedule';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  _url: string = "http://localhost:3000/schedules/";

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this._url);
  }

  public addSchedule(Schedule:Schedule):Observable<Schedule> {
    const url = `${this._url}`;
    return this.http.post<Schedule>(url,Schedule).pipe(
      catchError(this.handleError)
    );
  }

  public updateSchedule(Schedule:Schedule):Observable<Schedule> {
    const url = `${this._url}/${Schedule.id}`;
    return this.http.put<Schedule>(url,Schedule).pipe(
      catchError(this.handleError)
    );
  }

  public deleteSchedule(id: number): Observable<Schedule> {
    console.log(id);
    const url = `${this._url}/${id}`;
    return this.http.delete<Schedule>(url).pipe(
      catchError(this.handleError)
    );
  }


}
