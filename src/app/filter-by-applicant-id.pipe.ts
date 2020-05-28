import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByApplicantId'
})
export class FilterByApplicantIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
