import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reto1',
  imports: [CarouselComponent, RouterModule],
  templateUrl: './reto1.component.html',
  styleUrl: './reto1.component.css'
})
export class Reto1Component {
  indicators = true;  // controla si se muestran los indicadores
  autoPlay = true;    // controla si el carousel se reproduce automáticamente
  products: any[] = [];
}
