import { HttpClient, HttpParams } from '@angular/common/http'; // Servicio de Angular para hacer peticiones HTTP
import { Injectable } from '@angular/core'; // Decorador para marcar la clase como inyectable (service)
import { catchError, map, Observable, throwError } from 'rxjs'; // Herramientas de RxJS para manejar observables y errores
import { Product, ProductResponse } from '../types/Products'; // Interfaz que define la estructura del producto

export type filters = {
  q: string;
  minPrice?: number | undefined;
  maxPrice?: number | undefined;
};
@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible en toda la app (singleton)
})
export class ProductService {
    private baseUrl = 'http://localhost:3000/api/products'; // URL base para las peticiones a productos

  constructor(private httpClient:HttpClient) { } // Inyección de HttpClient para usarlo en métodos

  // Método para obtener un producto por su ID
  getProductById(id: string): Observable<Product> {
    if (!id) return throwError(() => new Error('Product ID is required')); 
    // Validación: si no hay id, lanza un error inmediato

    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`).pipe(
      // get<T>() devuelve un Observable tipado en Product
      catchError((error) => throwError(() => new Error(error)))
      // catchError intercepta errores y permite transformarlos o propagarlos
    );
  }
   getProducts(page: number = 1, limit: number = 10) {
    return this.httpClient
      .get<ProductResponse>(this.baseUrl, { params: { page, limit } })
      .pipe(catchError((error) => throwError(() => new Error(error))));
  }

  searchProducts(searchConfig:filters):Observable<Product[]>{
    

    let filters:filters ={
      q:searchConfig.q
    }
    if (searchConfig.minPrice) {
      filters.minPrice = searchConfig.minPrice;
    }
    if (searchConfig.maxPrice) {
      filters.maxPrice = searchConfig.maxPrice;
    }
    const params = new HttpParams({fromObject: filters});
    return this.httpClient.get<ProductResponse>(`${this.baseUrl}/search`, {params}).pipe(
      map(response=>{
        return response.products;
      })
    )

  }
}
