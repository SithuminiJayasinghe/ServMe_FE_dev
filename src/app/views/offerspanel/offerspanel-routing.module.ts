import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPanelComponent } from './offerspanel.component';

const routes: Routes = [
  {
    path: '',
    component: OffersPanelComponent,
    data: {
      title: 'Offerspanel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersPanelRoutingModule {}
