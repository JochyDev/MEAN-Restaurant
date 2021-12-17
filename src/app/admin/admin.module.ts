import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MaterialModule } from '../material/material.module';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavComponent, ProductListComponent, CreateProductComponent, UsersListComponent, MensajesComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
