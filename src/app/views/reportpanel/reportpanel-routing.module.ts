import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPanelComponent } from './reportpanel.component';

const routes: Routes = [
  {
    path: '',
    component: ReportPanelComponent,
    data: {
      title: 'Reportpanel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportPanelRoutingModule {}
