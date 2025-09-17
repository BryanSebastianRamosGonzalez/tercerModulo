import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciales'
})
export class InicialesPipe implements PipeTransform {

  transform(nombre: string): string {
    if (!nombre)
      return '';
    return nombre.split(' ').map( palabra=> palabra.charAt(0).toUpperCase()+'.').join(' ');
  }

}
