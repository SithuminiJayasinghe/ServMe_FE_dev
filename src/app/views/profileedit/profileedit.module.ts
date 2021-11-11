import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ProfileEditComponent } from './profileedit.component';
import { ProfileEditRoutingModule } from './profileedit-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ProfileEditRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ProfileEditComponent ]
})
export class ProfileEditModule { }
