import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private rootBaseUrl = "https://jsonplaceholder.typicode.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer RP2TMLBUBXZWE2P3FH3K'
    })
  }
  
  constructor(private http:HttpClient) { }

  
  getAllPhotos() {
    return this.http.get<any[]>(`${this.rootBaseUrl}/photos`);
  }

  // getProduct(id: string) {
  //   return this.http.get<any>(`${this.rootBaseUrl}/products/${id}`);
  // }

  // createProduct(product) {
  //   return this.http.post(`${this.rootBaseUrl}/products`, product);
  // }

  // updateProduct(id: string, changes: Partial<any>) {
  //   return this.http.put(`${this.rootBaseUrl}/products/${id}`, changes);
  // }

  // deleteProduct(id: string) {
  //   return this.http.delete(`${this.rootBaseUrl}/products/${id}`);
  // }
}
