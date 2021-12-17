import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefsComponent } from './components/chefs/chefs.component';

const routes: Routes = [
  {
    path: '',
    component: ChefsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefsRoutingModule { }
