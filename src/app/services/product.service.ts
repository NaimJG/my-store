import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {CreateProductDTO, Product, UpdateProductDTO} from './../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products/'
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getAllProductsByCategory(category: string){
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`)
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  create(data: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, data);
  }

  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

}
