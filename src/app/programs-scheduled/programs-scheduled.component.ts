import { Component, OnInit } from '@angular/core';
import { Schedule } from '../serviceSchedule/Schedule';
import { ScheduleService } from '../serviceSchedule/schedule.service';
import { ProgramService } from '../servicePrograms/program.service';
import { Program } from '../servicePrograms/Program';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-programs-scheduled',
  templateUrl: './programs-scheduled.component.html',
  styleUrls: ['./programs-scheduled.component.css']
})
export class ProgramsScheduledComponent implements OnInit {
  showForm: boolean = false;
  invalidForm: boolean = false;
  timeError: boolean = false;
  visibleSchedules: Schedule[] = [];
  visiblePrograms: Program[] = [];
  patterns = [
    "^[a-zA-Z]{0,20}$",
  ]

  scheduleForm = this.fb.group({
    name: ['', [Validators.required]],
    startdate: ['', [Validators.required, this.futureDateValidator]],
    enddate: ['', [Validators.required, this.futureDateValidator]],
    location: ['', [Validators.required, Validators.pattern(this.patterns[1])]],
    sessions: ['', Validators.required]
  });

  futureDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      let date = new Date(control.value).valueOf();
      let now = new Date().valueOf();
      return (now - date < 0) ? null : { 'futureDate': false };
    }
    return null;
  }

  validTime(form): any {
    let sd = new Date(form.value.startdate).valueOf();
    let ed = new Date(form.value.enddate).valueOf();
    return (sd - ed < 0) ? true : false;
  }

  constructor(
    private _scheduleService: ScheduleService,
    private _programService: ProgramService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSchedules();
    this.getPrograms();
  }

  onSubmit(form): void {
    console.log(form);
    if (form.valid) {
      if (!this.validTime(form)) {
        console.log("wrong pair of dates");
        this.timeError = true;
      } else {
        this.invalidForm = false;
        let schedule = new Schedule(
          null,
          form.value.name,
          form.value.location,
          form.value.startdate,
          form.value.enddate,
          form.value.sessions
        );
        console.log(schedule);
        this.addSchedule(schedule);
        this.timeError = true;
      }
    } else {
      this.invalidForm = true;
    }
  }

  getPrograms(): void {
    this._programService.getPrograms().subscribe(programs => this.visiblePrograms = programs);
    console.log(this.visiblePrograms);
  }

  getSchedules(): void {
    this._scheduleService.getSchedules().subscribe(schedules => this.visibleSchedules = schedules);
  }

  addSchedule(schedule: Schedule): void {
    this._scheduleService.addSchedule(schedule).subscribe(data => {
      console.log(data);
      this.getSchedules();
    });
  }

  deleteSchedule(event, id: number): void {
    console.log("delete called");
    this._scheduleService.deleteSchedule(id).subscribe(data => {
      console.log("old Program updated:" + data);
      this.getSchedules();
    });
  }

}
