import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/models/product.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      price: 0,
      description: '',
      url: ['', Validators.required]
    })
  }

  createProduct(event: Event){
    event.preventDefault();
    const product = this.form.value
    this.productsService.createProduct(product)
    .subscribe( rta => {
      console.log(rta)
    }, err => console.log(err))
  }

  uploadImage(event: any){
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('archivo', file)
    this.productsService.uploadImage(formData)
    .subscribe( (rta: any) => {
      this.form.value.url = rta.secure_url 
    })
  }

}
