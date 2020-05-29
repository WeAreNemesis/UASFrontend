import { Pipe, PipeTransform } from '@angular/core';

import { Application } from './serviceApplication/Application';

@Pipe({
  name: 'filterByApplicantId'
})
export class FilterByApplicantIdPipe implements PipeTransform {

  transform(application : Application[] , status: string): any {
    return application.filter(app =>{
      if(status) {
            let tempStatus = status.toLowerCase();
            let tempAppStatus = app.status.toLowerCase();
            if(tempAppStatus.startsWith(tempStatus))
                return true;
        }else{
            return true;
        }
    });
  }

}
