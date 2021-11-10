import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ItemsPanelComponent } from './itemspanel.component';
import { ItemsPanelRoutingModule } from './itemspanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ItemsPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ItemsPanelComponent ]
})
export class ItemsPanelModule { }
