import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AddUserComponent } from './addUser.component';
import { AddUserRoutingModule } from './addUser-routing.module';
import { AddUser } from './addUser';

@NgModule({
  imports: [
    FormsModule,
    AddUserRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ AddUserComponent ]
})
export class AddUserModule { }
