import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemCardViewComponent } from './itemCardView.component';

const routes: Routes = [
  {
    path: '',
    component: ItemCardViewComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemCardViewRoutingModule {}
