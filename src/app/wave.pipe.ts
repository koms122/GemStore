import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wave'
})
export class WavePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
