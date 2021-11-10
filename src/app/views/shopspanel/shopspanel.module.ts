import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ShopsPanelComponent } from './shopspanel.component';
import { ShopsPanelRoutingModule } from './shopspanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ShopsPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ShopsPanelComponent ]
})
export class ShopsPanelModule { }
