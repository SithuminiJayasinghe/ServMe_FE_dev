import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostJobComponent } from './postJob.component';

const routes: Routes = [
  {
    path: '',
    component: PostJobComponent,
    data: {
      title: ''
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostJobRoutingModule {}
