import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCourseId'
})
export class FilterByCourseIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
