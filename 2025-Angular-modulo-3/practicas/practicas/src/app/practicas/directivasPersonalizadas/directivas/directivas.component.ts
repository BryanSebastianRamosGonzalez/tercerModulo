import { Component } from '@angular/core';
import { DirectivasDirective } from '../directivas.directive';
import { SubRayarDirective } from '../sub-rayar.directive';

@Component({
  selector: 'app-directivas',
  imports: [DirectivasDirective, SubRayarDirective],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {

}
