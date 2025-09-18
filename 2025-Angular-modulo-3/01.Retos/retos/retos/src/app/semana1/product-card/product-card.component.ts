import { Component, Input } from '@angular/core';
import { Product } from '../../types/Products';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!:Product;
 constructor(private productService: ProductService) {}
}
