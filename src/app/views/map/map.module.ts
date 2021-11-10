import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
// import { Map } from './map';

import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
// import { } from 'googlemaps';
// declare var google: any;


@NgModule({
  imports: [
    FormsModule,
    MapRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    HttpClientModule  ,
    FormsModule,
    // BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB7v1ubwU5W0UzQgrnVHFlmkKPoFcpUZpA',
      libraries: ['places']
    })
  ],
  declarations: [ MapComponent ]
})
export class MapModule { }
