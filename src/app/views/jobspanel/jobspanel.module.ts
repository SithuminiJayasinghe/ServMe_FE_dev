import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { JobsPanelComponent } from './jobspanel.component';
import { JobsPanelRoutingModule } from './jobspanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    JobsPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ JobsPanelComponent ]
})
export class JobsPanelModule { }
