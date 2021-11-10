import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ItemsPanelReportComponent } from './itemspanelreport.component';
import { ItemsPanelReportRoutingModule } from './itemspanelreport-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ItemsPanelReportRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ItemsPanelReportComponent ]
})
export class ItemsPanelReportModule { }
