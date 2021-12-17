import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  token!: any;

  constructor(
    private http: HttpClient
  ) {
    this.getItem();
  }

  getProducts(){
    return this.http.get(`${environment.api_url}/productos`)
  }

  createProduct(product: Product ){
    return this.http.post(`${environment.api_url}/productos`, product, {
      headers: {
        'x-token': this.token
      }
    })
  }

  uploadImage(formData: any){
    return this.http.post(`${environment.api_url}/uploads`, formData )
  }

  getItem(){
    this.token = localStorage.getItem('x-token')
    console.log(this.token)
  }

}
