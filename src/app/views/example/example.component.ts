import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { FormsModule } from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination/public_api';
import { AgmCoreModule } from '@agm/core';
// import {} from '@types/googlemaps';

@Component({
  templateUrl: 'example.component.html',
  // styleUrls: ['./multi-item-carousel.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ],

  selector: 'get-request-error-handling',
  styles: ['.pager li.btn:active { box-shadow: none; } agm-map { height: 300px; }'],
  encapsulation: ViewEncapsulation.None
})

@NgModule({
  imports: [
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
    // PaginationModule.forRoot(),
  ],
  declarations: [
    ExampleComponent,

  ],
})

export class ExampleComponent implements OnInit {

  title = 'My Map';
  latitiude = 56.8888;
  longititude = 6.8888;

  totalItems: number = 64;
  currentPage: number   = 4;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;

  people:Person[];
  person = new Person();

  public totalAngularPackages;
    errorMessage;

    constructor(private http: HttpClient) { }

    ngOnInit() {

        this.successModal.show();
        console.log("****************---");
    }


  
    doPOST(person:Person) {
      console.log("POST");
      console.log("this.person.name - " + this.person.name);
      this.http.post("http://localhost:5102/user/add",
      // this.person
      {
        "user_id":"admin",
        "name":this.person.name,
        "password":"Nimal",
        "nic":"test",
        "dob":"test",
        "gender":"test",
        "email":"test",
        "address":"test",
        "contact_number":"test",
        "user_type":"1"
      }
    )
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body", 
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
  }
    
    
    public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 

}

