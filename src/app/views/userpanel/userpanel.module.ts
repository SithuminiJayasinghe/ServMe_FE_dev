import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { UserPanelComponent } from './userpanel.component';
import { UserPanelRoutingModule } from './userpanel-routing.module';

@NgModule({
  imports: [
    FormsModule,
    UserPanelRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ UserPanelComponent ]
})
export class UserPanelModule { }
