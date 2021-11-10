import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ViewShopComponent } from './viewShop.component';
import { ViewShopRoutingModule } from './viewShop-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ViewShopRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()  
  ],
  declarations: [ ViewShopComponent ]
})
export class ViewShopModule { }
