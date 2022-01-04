import {Component, OnDestroy, OnInit, NgModule} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {CarouselConfig, CarouselModule} from "ngx-bootstrap/carousel";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { Item } from './item';
import { Search } from './search';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {search_word, name, price_min, price_max, createDate_min, createDate_max , category_id, district_id, city_id } from '../../global-variable';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
getPosts() {
    return this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
  }
}

@Component({
  templateUrl: 'search.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
@NgModule({
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule    
  ],
  declarations: [
    SearchComponent,

  ]
})
export class SearchComponent implements OnInit, OnDestroy {

  itemSet: any[];
  item = new Item();
  search = new Search();
  fakeArray = new Array(12);

  public totalAngularPackages;
  public totalAngularPackagesShop;
  public districtList;
  public cityList;
  public categoryList;
  errorMessage;

  constructor(private http: HttpClient, private router: Router) {
  }





  doPOSTClickAddMapList() {
 
    sessionStorage.setItem( "name",this.search.name);
    sessionStorage.setItem("longitude",this.search.longitude);
    sessionStorage.setItem( "latitude",this.search.latitude);
    sessionStorage.setItem("city_id",this.search.city_id);
    sessionStorage.setItem("price_min",this.search.price_min);
    sessionStorage.setItem("price_max",this.search.price_max);
    sessionStorage.setItem("createDate_min",this.search.createDate_min);
    sessionStorage.setItem("createDate_max",this.search.createDate_max);
    sessionStorage.setItem("category_id",this.search.category_id);
    sessionStorage.setItem( "district_id",this.search.district_id);

    window.open('http://localhost:4200/#/map', '_blank');
    // document.location.href='http://localhost:4200/#/map'
  }
  
  
  doPOSTGetShop() {
    console.log("POST");
    console.log("this.search.name - " + this.search.city_id);
    this.http.post("http://localhost:5102/shop/getByShopFromName",
    {
      "name":this.search.name,
    }
  )
    .subscribe(
        (val) => {
          this.totalAngularPackagesShop = val
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        }
      );
}

  doPOST() {
    console.log("POST");
    console.log("this.search.name - " + this.search.city_id);
    this.doPOSTGetShop();
    this.http.post("http://localhost:5102/item/get-search",
    {
      "name":this.search.name,
      "longitude":this.search.longitude,
      "latitude":this.search.latitude,
      "city_id":this.search.city_id,
      "price_min":this.search.price_min,
      "price_max":this.search.price_max,
      "createDate_min":this.search.createDate_min,
      "createDate_max":this.search.createDate_max,
      "category_id":this.search.category_id,
      "district_id":this.search.district_id,
    }
  )
    .subscribe(
        (val) => {
          this.totalAngularPackages = val,
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        }
      );
}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.search.name = sessionStorage.getItem("searchWord");
    this.doGETdistrictList();
    this.doGETcityList();
    this.doGETcategoryList();

    this.search.district_id = '0';
    this.search.city_id = '0';

    if(this.search.name == ""){
      this.doGET();
    }
    this.doPOST();
 
  }

  async doPOSTClick() {
    console.log("POST");
    this.router.navigateByUrl('/search');
  }
  async doGET() {
    console.log("GET");
    let url = `http://localhost:5102/item/get`;
    this.http.get(url).subscribe(res => 
      // console.log(res),
      this.totalAngularPackages = res
    );
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
      "district_id":this.search.district_id
      // "district_id":1
    }
    )
    .subscribe(res => 
      // console.log(res),
      this.cityList = res
      
      
    );

    this.search.city_id = null;
    this.doPOST();
    this.search.city_id = '0';
  }
}
