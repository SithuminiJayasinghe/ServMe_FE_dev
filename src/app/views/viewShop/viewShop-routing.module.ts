import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewShopComponent } from './viewShop.component';

const routes: Routes = [
  {
    path: '',
    component: ViewShopComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewShopRoutingModule {}
