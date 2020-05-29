import { Pipe, PipeTransform } from '@angular/core';
import { Schedule } from './serviceSchedule/Schedule';

@Pipe({
  name: 'filterByCourseId'
})
export class FilterByCourseIdPipe implements PipeTransform {

  transform(schedule : Schedule[], name:string): any {

    return schedule.filter(schedule=>{
        if(name){
            let tempName = name.toLowerCase();
            let tempSchName = schedule.name.toLowerCase();
            if(tempSchName.startsWith(tempName))
                return true;
        }else{
            return true;
        }
    });
  }

}
