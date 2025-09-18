import { Component } from '@angular/core';
import { Product } from '../../types/Products';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-retail',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-retail.component.html',
  styleUrl: './product-retail.component.css',
})
export class ProductRetailComponent {
  quantity = 0;
  product: Product | null = null; //variable que guarda el producto
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {}  //inyecciones de activatedRoute y del servicio a usar  
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id'); // obtiene el parámetro dinámico
      if (id) {
        this.productService.getProductById(id).subscribe({
          next: (data) => (this.product = data), //guarda la informacion del producto
          error: (err) => console.error('Error cargando producto:', err), //avisa que hay error
          
        });
      }
    });
  }
  addToCart(product: any, quantity: number) {
    if (!product || quantity < 1) return;

    const cantidad = Math.min(quantity, product.stock); // limitar por stock
    console.log(`Agregando al carrito: ${product.name} ${cantidad}`);
    // Aquí puedes llamar a un servicio real de carrito
  }
  redirectToProducts() {
  // redirige al listado de productos
  this.router.navigate(['/products']);
  return '';
}

}
