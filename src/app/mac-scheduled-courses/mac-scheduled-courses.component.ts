import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../serviceApplication/application.service';
import { ScheduleService } from '../serviceSchedule/schedule.service';
import { Application } from '../serviceApplication/Application';
import { Schedule } from '../serviceSchedule/Schedule';

@Component({
  selector: 'app-mac-scheduled-courses',
  templateUrl: './mac-scheduled-courses.component.html',
  styleUrls: ['./mac-scheduled-courses.component.css']
})
export class MacScheduledCoursesComponent implements OnInit {
   application: Application[]=[];
   schedule:Schedule[]=[];
    model : any[]=[];




  status:string;

  constructor(private appService: ApplicationService, private scheduleService :ScheduleService) { }

  ngOnInit(): void {
    this.getSchedules();
    this.getApplications();
    this.application.forEach(function(element){
      this.model.push({
       id:element.id,
       name:element.name,
       courseName:(this.schedule.find(e=>e.id===element.schedule)).name,
       status:element.status
      });
      console.log(this.model);
    });


  }

  getApplications(): void {
    this.appService.getApplications().subscribe(applications => { this.application = applications;
      console.log(this.application);
    });

  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => { this.schedule = schedules;
      console.log(this.schedule);
    });

  }
}
