import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsPanelComponent } from './shopspanel.component';

const routes: Routes = [
  {
    path: '',
    component: ShopsPanelComponent,
    data: {
      title: 'Shopspanel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsPanelRoutingModule {}
