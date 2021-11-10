import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  imports: [
    FormsModule,
    SearchRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ SearchComponent ]
})
export class SearchModule { }
