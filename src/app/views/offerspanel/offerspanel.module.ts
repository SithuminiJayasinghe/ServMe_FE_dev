import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { OffersPanelComponent } from './offerspanel.component';
import { OffersPanelRoutingModule } from './offerspanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    OffersPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ OffersPanelComponent ]
})
export class OffersPanelModule { }
