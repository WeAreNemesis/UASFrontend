import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAppBySched'
})
export class FilterAppBySchedPipe implements PipeTransform {

  transform(applications, scheduleId, length): unknown {
    if (length > 0) {
      return applications.filter(application => {
        if (scheduleId) {
          return (application.schedule == scheduleId) ? true : false;
        } else {
          return true;
        }
      });
    } else {
      return applications;
    }
  }

}
