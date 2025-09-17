import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OcultarInicioPipe } from '../ocultar-inicio.pipe';
import { InicialesPipe } from '../iniciales.pipe';

@Component({
  selector: 'app-tuberias',
  imports: [CommonModule, OcultarInicioPipe, InicialesPipe],
  templateUrl: './tuberias.component.html',
  styleUrl: './tuberias.component.css',
})
export class TuberiasComponent {
  fechas: string[] = [
    '2023/02/17',
    '2024/07/05',
    '2025/01/23',
    '2022/12/09',
    '2025/09/14',
    '2023/11/30',
    '2024/04/18',
    '2025/06/01',
    '2023/08/22',
    '2024/10/11',
  ];

  sueldos: number[] = [
    12000, 18500, 9500, 22000, 15700, 13450, 18000, 10200, 24000, 19800,
  ];

  contrasena: string = 'superclave123';

  nombresCompletos: string[] = [
    'sebastián ramos gonzález',
    'valentina pérez martínez',
    'mateo garcía ortega',
    'sofía méndez lopez',
    'lucas ortega ramírez',
    'youna carrión morales',
  ];
}
