import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { OffersViewComponent } from './offersView.component';
import { OffersViewRoutingModule } from './offersView-routing.module';

@NgModule({
  imports: [
    FormsModule,
    OffersViewRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ OffersViewComponent ]
})
export class OffersViewModule { }
