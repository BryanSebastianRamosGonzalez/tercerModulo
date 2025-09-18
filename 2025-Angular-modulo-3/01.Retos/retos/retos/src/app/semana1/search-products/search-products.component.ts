import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  map,
  switchMap,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductService } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-products',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css',
})
export class SearchProductsComponent implements OnInit {
  searchProductForm = new FormGroup({
    q: new FormControl('', { nonNullable: true }),
    minPrice: new FormControl(200, { nonNullable: true }),
    maxPrice: new FormControl(2000, { nonNullable: true }),
  });

  searchConfig$ = this.searchProductForm.valueChanges.pipe(
    debounceTime(300),
    // distinctUntilKeyChanged('q'),
    distinctUntilChanged((prevValue, newValue) => {
      return prevValue === newValue;
    }),
    map((config) => {
      const trimmedConfig = {
        ...config,
        q: config.q?.trim() || '',
      };
      localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig));
      return trimmedConfig;
    })
  );

  products$ = this.searchConfig$.pipe(
    switchMap((searchConfigObservable) =>
      this.productService.searchProducts(searchConfigObservable)
    )
  );

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.searchConfig$.subscribe({ next: (data) => console.log(data) });
  }

  goToProduct(productId: string) {
  if (!productId) return; // Validación básica

  // Limpiar barra de búsqueda y filtros opcionales
  this.searchProductForm.get('q')?.setValue('');
  this.searchProductForm.get('minPrice')?.setValue(200);    
  this.searchProductForm.get('maxPrice')?.setValue(2000);  

  // Navegar al detalle del producto
  this.router.navigate(['/products', productId]);
}
}
