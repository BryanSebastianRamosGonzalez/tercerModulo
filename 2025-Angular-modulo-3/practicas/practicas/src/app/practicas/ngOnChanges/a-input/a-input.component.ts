import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-a-input',
  imports: [UserDetailsComponent],
  templateUrl: './a-input.component.html',
  styleUrl: './a-input.component.css',
})
export class AInputComponent {
  users = [
    { id: 1, name: 'Youna', email: 'carrion@gmail.com' },
    { id: 2, name: 'Mateo', email: 'mateo.rios@example.com' },
    { id: 3, name: 'Sofía', email: 'sofia.mendez@example.com' },
    { id: 4, name: 'Lucas', email: 'lucas.garcia@example.com' },
    { id: 5, name: 'Valentina', email: 'valentina.perez@example.com' },
  ];

  usuarioSeleccionado=this.users[0];

  seleccionarUsuario(user:any){
    this.usuarioSeleccionado=user;
  }
}
