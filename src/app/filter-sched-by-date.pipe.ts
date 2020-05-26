import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSchedByDate'
})
export class FilterSchedByDatePipe implements PipeTransform {

  transform(schedules, startdate, enddate, length): unknown {
    if (length > 0) {
      console.log("filtering:"+length);
      return schedules.filter(schedule => {
        if (startdate && enddate) {
          console.log("both are here");
          return (schedule.startdate > startdate && schedule.enddate < enddate) ? true : false;
        }
        if (startdate) {
          console.log("startdate is here");
          return (schedule.startdate > startdate) ? true : false;
        }
        if (enddate) {
          return (schedule.enddate < enddate) ? true : false;
        }
        return true;
      });
    } else {
      return schedules;
    }
  }

}
