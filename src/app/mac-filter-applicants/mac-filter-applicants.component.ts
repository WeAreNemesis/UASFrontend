import { Component, OnInit } from '@angular/core';
import { Application } from '../serviceApplication/Application';
import { Schedule } from '../serviceSchedule/Schedule';
import { ApplicationService } from '../serviceApplication/application.service';
import { ScheduleService } from '../serviceSchedule/schedule.service';

@Component({
  selector: 'app-mac-filter-applicants',
  templateUrl: './mac-filter-applicants.component.html',
  styleUrls: ['./mac-filter-applicants.component.css']
})
export class MacFilterApplicantsComponent implements OnInit {

  application: Application[]=[];
  schedule:Schedule[]=[];

  status:string;

  constructor(private appService: ApplicationService, private scheduleService :ScheduleService) { }

  ngOnInit(): void {
    this.getSchedules();
    this.getApplications();

  }

  getApplications(): void {
    this.appService.getApplications().subscribe(applications => this.application = applications);
    console.log(this.application);
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedule = schedules);
  }
}
