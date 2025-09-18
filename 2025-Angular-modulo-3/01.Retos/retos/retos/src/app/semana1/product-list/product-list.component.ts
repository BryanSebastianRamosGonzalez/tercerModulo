import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../../types/Products';
import { ProductService } from '../../services/product-service.service';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [MatPaginatorModule, ProductCardComponent, PlaceholderComponent, CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  productResponse!: ProductResponse;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(page: number = 1, limit: number = 10) {
    this.productService.getProducts(page, limit).subscribe({
      next: (data) => {
        console.log(data);
        this.productResponse = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onPageChange(event: PageEvent) {
    console.log(event);
    this.getProducts(event.pageIndex, event.pageSize);
  }
}
