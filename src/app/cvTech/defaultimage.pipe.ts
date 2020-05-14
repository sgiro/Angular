import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, args?: any ): string {
    if(!value)
    {
      return 'tim_logo.png';
    }
    return value;
  }

}
