import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPanelComponent } from './itemspanel.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsPanelComponent,
    data: {
      title: 'Itemspanel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsPanelRoutingModule {}
