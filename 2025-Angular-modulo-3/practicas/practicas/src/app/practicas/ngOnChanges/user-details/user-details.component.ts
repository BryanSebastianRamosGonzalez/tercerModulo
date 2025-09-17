import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() user! :{ id:number, name:string, email:string};

  ngOnInit(): void{
    console.log("Soy el ngOnInit del componente userDetails")
  };

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['user']){
      console.log('Usuario cambiado: ', changes['user'].currentValue);
      this.cargarPublicaciones(changes['user'].currentValue.id)
    }
  }

  cargarPublicaciones(userId:number){
    console.log(`Cargando libros del autor con id ${userId}`);
    //este es un ejemplo de una peticion real a un servidor para que regrese la info solicitada.
  }
}
