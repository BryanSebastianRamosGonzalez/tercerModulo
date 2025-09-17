import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AInputComponent } from './practicas/ngOnChanges/a-input/a-input.component';

@Component({
  selector: 'app-root',
  imports: [AInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicas';
}
