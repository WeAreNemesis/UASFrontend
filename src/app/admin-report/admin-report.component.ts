import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../serviceApplication/application.service';
import { Application } from '../serviceApplication/Application';
import { ScheduleService } from '../serviceSchedule/schedule.service';
import { Schedule } from '../serviceSchedule/Schedule';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  visibleApplications: Application[]=[];
  visibleSchedules:Schedule[]=[];

  scheduleId:number;
  startdate:Date;
  enddate:Date;

  constructor(
    private _applicationService: ApplicationService,
    private _scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.getSchedules();
    this.getApplications();
    console.log(this.visibleApplications);
  }

  getApplications(): void {
    this._applicationService.getApplications().subscribe(applications => this.visibleApplications = applications);
    console.log(this.visibleApplications);
  }

  getSchedules(): void {
    this._scheduleService.getSchedules().subscribe(schedules => this.visibleSchedules = schedules);
  }
}
