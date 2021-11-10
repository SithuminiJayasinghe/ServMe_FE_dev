import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ItemCardViewComponent } from './itemCardView.component';
import { ItemCardViewRoutingModule } from './itemCardView-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ItemCardViewRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ItemCardViewComponent ]
})
export class ItemCardViewModule { }
