import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PostJobComponent } from './postJob.component';
import { PostJobRoutingModule } from './postJob-routing.module';

@NgModule({
  imports: [
    FormsModule,
    PostJobRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PostJobComponent ]
})
export class PostJobModule { }
