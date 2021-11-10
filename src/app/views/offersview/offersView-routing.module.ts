import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersViewComponent } from './offersView.component';

const routes: Routes = [
  {
    path: '',
    component: OffersViewComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersViewRoutingModule {}
