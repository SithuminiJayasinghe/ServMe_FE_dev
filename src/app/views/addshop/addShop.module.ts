import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AddShopComponent } from './addShop.component';
import { AddShopRoutingModule } from './addShop-routing.module';
import { AddShop } from './addShop';

@NgModule({
  imports: [
    FormsModule,
    AddShopRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AddShopComponent ]
})
export class AddShopModule { }
