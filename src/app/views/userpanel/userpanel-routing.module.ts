import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPanelComponent } from './userpanel.component';

const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
    data: {
      title: 'Userpanel'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule {}
