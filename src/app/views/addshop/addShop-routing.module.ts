import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShopComponent } from './addShop.component';

const routes: Routes = [
  {
    path: '',
    component: AddShopComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddShopRoutingModule {}
