import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string ='http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createProduct(product:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }

  updateProduct(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
