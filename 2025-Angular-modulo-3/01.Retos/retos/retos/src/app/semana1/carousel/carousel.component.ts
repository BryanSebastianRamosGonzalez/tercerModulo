import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  @Input() showControls: boolean = true;
  @Input() showIndicators: boolean = true; 
  @Input() autoPlay: boolean = true;     
  @Input() interval: number = 5000;
  @Input() products: any[] = [];      

  images: {
    src: string;
    loaded: boolean;
    loading: boolean;
    alt: string;
    id?: string;
  }[] = [];

  currentIndex = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadCarouselProducts();
    this.loadOfferProducts();
  }

  loadCarouselProducts() {
    this.productService.getCheapestProducts(10).subscribe({
      next: (products) => {
        this.products = products;
        this.images = products.map(p => ({
          src: Array.isArray(p.imagesUrl) && p.imagesUrl.length > 0 ? p.imagesUrl[0] : 'assets/placeholder.png',
          loaded: false,
          loading: false,
          alt: p.name,
          id: p._id
        }));

        if (this.images.length > 0) this.loadImage(0);
      },
      error: (err) => {
        console.error('Error cargando productos del carousel', err);
      }
    });
  }

  loadImage(index: number) {
    if (index < 0 || index >= this.images.length) return;
    if (this.images[index].loaded) return;

    this.images[index].loading = true;
    const img = new Image();
    img.onload = () => {
      setTimeout(() => {
        this.images[index].loaded = true;
        this.images[index].loading = false;
      }, 500);
    };
    img.onerror = () => {
      console.error('Error cargando la imagen', this.images[index].src);
      this.images[index].loaded = false;
      this.images[index].loading = false;
      this.images[index].src = 'assets/placeholder.png';
    };
    img.src = this.images[index].src;
  }

  goToProduct(productId: string) {
    if (!productId) return;
    this.router.navigate(['/products', productId]);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.loadImage(this.currentIndex);
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.loadImage(this.currentIndex);
  }
  offerImages: {
  src: string;
  loaded: boolean;
  loading: boolean;
  alt: string;
  id?: string;
}[] = [];

currentIndexOffers = 0; // índice para carrusel de ofertas
offerProducts: any[] = []; // guardamos info de productos de ofertas


loadOfferProducts() {
  this.productService.getCheapestProducts(3).subscribe({
    next: (products) => {
      this.offerProducts = products;
      this.offerImages = products.map(p => ({
        src: Array.isArray(p.imagesUrl) && p.imagesUrl.length > 0 ? p.imagesUrl[0] : 'assets/placeholder.png',
        loaded: false,
        loading: false,
        alt: p.name,
        id: p._id
      }));
      if (this.offerImages.length > 0) this.loadOfferImage(0);
    },
    error: (err) => console.error('Error cargando productos de ofertas', err)
  });
}

loadOfferImage(index: number) {
  if (index < 0 || index >= this.offerImages.length) return;
  if (this.offerImages[index].loaded) return;

  this.offerImages[index].loading = true;
  const img = new Image();
  img.onload = () => {
    setTimeout(() => {
      this.offerImages[index].loaded = true;
      this.offerImages[index].loading = false;
    }, 500);
  };
  img.onerror = () => {
    this.offerImages[index].loaded = false;
    this.offerImages[index].loading = false;
    this.offerImages[index].src = 'assets/placeholder.png';
  };
  img.src = this.offerImages[index].src;
}

nextOfferImage() {
  this.currentIndexOffers = (this.currentIndexOffers + 1) % this.offerImages.length;
  this.loadOfferImage(this.currentIndexOffers);
}

prevOfferImage() {
  this.currentIndexOffers =
    this.currentIndexOffers === 0 ? this.offerImages.length - 1 : this.currentIndexOffers - 1;
  this.loadOfferImage(this.currentIndexOffers);
}

}
