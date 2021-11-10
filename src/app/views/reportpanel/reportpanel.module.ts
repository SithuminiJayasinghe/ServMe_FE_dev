import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ReportPanelComponent } from './reportpanel.component';
import { ReportPanelRoutingModule } from './reportpanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReportPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ReportPanelComponent ]
})
export class ReportPanelModule { }
