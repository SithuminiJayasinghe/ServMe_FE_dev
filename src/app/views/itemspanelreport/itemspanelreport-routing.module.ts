import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPanelReportComponent } from './itemspanelreport.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsPanelReportComponent,
    data: {
      title: 'Itemspanelreport'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsPanelReportRoutingModule {}
