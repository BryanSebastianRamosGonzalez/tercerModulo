import { Routes } from '@angular/router';
import { Reto1Component } from './semana1/reto1/reto1.component';

export const routes: Routes = [
  { path: '', component: Reto1Component, title: 'Home' },

  // Listado de productos
  {
    path: 'products',
    loadComponent: () =>
      import('../app/semana1/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
    title: 'Products',
  },

  // Detalle de producto por ID
  {
    path: 'products/:id',
    loadComponent: () =>
      import('../app/semana1/product-retail/product-retail.component').then(
        (c) => c.ProductRetailComponent
      ),
    title: 'Product Detail',
  },
];
