import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './dto/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) { }
  private baseUrl: string = 'https://fakestoreapi.com/';
  
  getProducts(limit: number = 5): Observable<Array<ProductResponse>>{
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductResponse>>(productUrl);
  }
  deletePrduct(id: number | undefined): Observable<ProductResponse>{
    const url: string = `${this.baseUrl}products/${id}`;
    return this.http.delete(url);
  }
}
