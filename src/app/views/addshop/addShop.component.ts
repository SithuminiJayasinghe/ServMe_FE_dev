import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {CarouselConfig} from "ngx-bootstrap/carousel";

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddShopModule } from './addShop.module';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddShop } from './addShop';
import { FormsModule } from '@angular/forms';
import {author, title, userId} from '../../global-variable';

import {ModalDirective} from 'ngx-bootstrap/modal';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
getPosts() {
    return this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
  }
}

@Component({
  templateUrl: 'addShop.component.html',
  // templateUrl: 'modals.component.html',
  selector: 'multi-item-carousel',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
@NgModule({
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule  ,
    FormsModule  
  ],
  declarations: [
    AddShopComponent,

  ]
})

export class AddShopComponent implements OnInit, OnDestroy {

  public totalAngularPackages;
  public shopDetailList;
  public districtList;
  errorMessage;
  addShop = new AddShop();
  public cityList;
  public categoryList;
  showMsg: boolean = false;

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
  @ViewChild('smallModal') public smallModal: ModalDirective;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild('warningModal') public warningModal: ModalDirective;
  @ViewChild('dangerModal') public dangerModal: ModalDirective;
  @ViewChild('infoModal') public infoModal: ModalDirective;
  
  closeAlert() {
    this.showMsg= false;
  }

  async doGETShopByUserId(userId) {
    console.log("GET");
    let url = `http://localhost:5102/shop/getByUserId?userId=`+userId;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.shopDetailList = res
    );
  }
  

  doPOST() {
    console.log("POST");
    console.log("this.addShop.name - " + this.addShop.name);
    this.http.post<any>("http://localhost:5102/shop/add",
    {
      "name":this.addShop.name,
      "description":this.addShop.description,
      "price":this.addShop.price,
      "longitude":this.addShop.longitude,
      "latitude":this.addShop.latitude,
      "address":this.addShop.address,
      "image_1":this.addShop.image_1,
      "image_2":this.addShop.image_2,
      "image_3":this.addShop.image_3,
      "image_4":this.addShop.image_4,
      "image_5":this.addShop.image_5,
      "image_6":this.addShop.image_6,
      "image_7":this.addShop.image_7,
      "image_8":this.addShop.image_8,
      "is_special_discount":this.addShop.is_special_discount,
      "discount_price":this.addShop.discount_price,
      "email":this.addShop.email,
      "expire_date":"2021-07-20",
      "showroom_id":1,
      "city_id":this.addShop.city_id,
      "district_id":this.addShop.district_id,
      "banner_image":this.addShop.banner_image,
      "mobile_1":this.addShop.mobile_1,
      "mobile_2":this.addShop.mobile_2,
      "whatsapp":this.addShop.whatsapp,
      "facebook":this.addShop.facebook,
      "user_id": "1"
    }
  )
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);

                        this.addShop.name = "",
                        this.addShop.type = "0",
                        this.addShop.description= "",
                        this.addShop.price= "0",
                        this.addShop.longitude= "",
                        this.addShop.latitude= "",
                        this.addShop.image_1= "",
                        this.addShop.image_2= "",
                        this.addShop.image_3= "",
                        this.addShop.image_4= "",
                        this.addShop.image_5= "",
                        this.addShop.image_6= "",
                        this.addShop.image_7= "",
                        this.addShop.image_8= ""
                        this.addShop.showroom_id="0",
                        this.addShop.city_id = "0"
                        this.addShop.address = ""
                        this.addShop.district_id = "0"
                        this.addShop.mobile_1 = ""
                        this.addShop.mobile_2 = ""
                        this.addShop.email = ""
                        this.addShop.whatsapp = ""
                        this.addShop.facebook = ""
                         if(val.success){
                          this.showMsg= true;
                        }
                        window.open('http://localhost:4200/#/payment', '_blank');

        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
}

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
    this.doGET();
    this.doGetDistrictList();
    this.doGETcityList();
    this.doGETcategoryList();
    this.doGETShopByUserId(userId)
    this.addShop.type = '0';
    this.addShop.district_id = '0';
    this.addShop.city_id = '0';
    this.addShop.showroom_id = '0';
    this.addShop.image_1 = 'assets/img/brand/sample_img.png';
    this.addShop.image_2 = 'assets/img/brand/sample_img.png';
    this.addShop.image_3 = 'assets/img/brand/sample_img.png';
    this.addShop.image_4 = 'assets/img/brand/sample_img.png';
    this.addShop.image_5 = 'assets/img/brand/sample_img.png';
    this.addShop.image_6 = 'assets/img/brand/sample_img.png';
    this.addShop.image_7 = 'assets/img/brand/sample_img.png';
    this.addShop.image_8 = 'assets/img/brand/sample_img.png';
    this.addShop.banner_image = 'assets/img/brand/sample_img.png';

    console.log("The POST observable is now completed. - " + author);
  }

  // totalAngularPackages;
  constructor(private http: HttpClient) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  setCity() {
    for (var val of this.cityList.result) {
      if(val.city_id ==  this.addShop.city_id){
       this.addShop.city_name = val.name;
      }
  }
}


  doSetShopName() {
    console.log("GET");
    console.log(this.shopDetailList.result); 
    for (var val of this.shopDetailList.result) {
     if(val.id ==  this.addShop.showroom_id){
      this.addShop.showroom_name = val.name;
      this.addShop.email = val.email;
      this.addShop.mobile_1 = val.contact_number_1;
      this.addShop.mobile_2 = val.contact_number_2;
      this.addShop.city_id = val.city_id;
      this.addShop.district_id = val.district_id;
      this.addShop.address = val.address;
      this.addShop.longitude = val.longitude;
      this.addShop.latitude = val.latitude;
     }
    }

    for (var val of this.cityList.result) {
      if(val.city_id ==  this.addShop.city_id){
       this.addShop.city_name = val.name;
      }
  }
    
  }

  doGET() {
    console.log("GET");
    let url = `http://localhost:5102/item/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.totalAngularPackages = res
    );
  }

  doGetDistrictList() {
    console.log("GET");
    let url = `http://localhost:5102/district/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.districtList = res
    );
  }

  myInterval: number | false = 6000;
  slides: any[] = [];
  activeSlideIndex: number = 0;
  noWrapSlides: boolean = false;



  ngOnDestroy(): void {
    this.myInterval = 0;
    this.noWrapSlides = true;
    this.myInterval = false;
  }

  addSlide(): void {
    setTimeout( () => {
      const seed = Math.random().toString(36).slice(-6);
      this.slides.push({
        image: `https://picsum.photos/seed/${seed}/900/500`
      });
    }, 500);
  }

  handleFileInput(event) {
    console.log("uploard");
      console.log("event.target.files[0].name - " + event.target.files[0].name);
      let me = this;
      let file = event.target.files[0];
      let reader = new FileReader();
     
      
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.addShop.banner_image = reader.result as string;
      };
     
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
  

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
  async doGETdistrictList() {
    console.log("GET");
    let url = `http://localhost:5102/district/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.districtList = res
    );
  }

  async doGETcityList() {
    console.log("GET");
    let url = `http://localhost:5102/city/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.cityList = res
    );
  }

  async doGETcategoryList() {
    console.log("GET");
    let url = `http://localhost:5102/category/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.categoryList = res
    );
  }

  async doGETcityListByDistrictId() {
    console.log("GET");
    let url = `http://localhost:5102/city/get-by-district-id`;
    this.http.post(url, {
      "district_id":this.addShop.district_id
      // "district_id":1
    }
    )
    .subscribe(res => 
      // console.log(res),
      this.cityList = res
    );
  }
  
}
