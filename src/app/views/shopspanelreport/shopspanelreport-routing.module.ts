import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopsPanelReportComponent } from './shopspanelreport.component';

const routes: Routes = [
  {
    path: '',
    component: ShopsPanelReportComponent,
    data: {
      title: 'Shopspanelreport'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsPanelReportRoutingModule {}
