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
  model : any[]=[];
  name:string;
  formvisible: boolean=false;

  constructor(private appService: ApplicationService, private scheduleService :ScheduleService) { }

  ngOnInit(): void {
    this.getSchedules();
    this.getApplications();
    this.application.forEach(function(element){
      this.model.push({
      courseId:(this.schedule.find(e=>e.id===element.schedule)).id,
       id:element.id,
       name:element.name,
       courseName:(this.schedule.find(e=>e.id===element.schedule)).name,

      });
      console.log(this.model);
    });

  }

  getApplications(): void {
    this.appService.getApplications().subscribe(applications => this.application = applications);
    console.log(this.application);
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedule = schedules);
    console.log(this.schedule);
  }

  deleteApplicant(event, id: number) : void
  {
    console.log("delete called");
    this.appService.deleteApplication(id).subscribe(data => {
      console.log("Applicant deleted.");
      this.getApplications();
    });
  }
  setInterview($event,m):void
  {
    this.formvisible=true;

  }
}
