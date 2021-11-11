import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ShopsPanelReportComponent } from './shopspanelreport.component';
import { ShopsPanelReportRoutingModule } from './shopspanelreport-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ShopsPanelReportRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ShopsPanelReportComponent ]
})
export class ShopsPanelReportModule { }
