import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AInputComponent } from './practicas/ngOnChanges/a-input/a-input.component';
import { TuberiasComponent } from './practicas/pipes/tuberias/tuberias.component';
import { DirectivasComponent } from './practicas/directivasPersonalizadas/directivas/directivas.component';

@Component({
  selector: 'app-root',
  imports: [AInputComponent, TuberiasComponent, DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicas';
}
