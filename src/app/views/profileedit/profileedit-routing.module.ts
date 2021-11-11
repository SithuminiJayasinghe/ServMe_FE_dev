import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditComponent } from './profileedit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEditRoutingModule {}
