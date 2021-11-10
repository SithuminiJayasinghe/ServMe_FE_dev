import {Component, OnDestroy, OnInit, NgModule} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {CarouselConfig, CarouselModule} from "ngx-bootstrap/carousel";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashboardComponent } from '../dashboard/dashboard.component';

// import { Item } from './item';
import { Search } from './search';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
getPosts() {
    return this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
  }
}

@Component({
  templateUrl: 'shopspanel.component.html',
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
    ShopsPanelComponent,

  ]
})
export class ShopsPanelComponent implements OnInit, OnDestroy {

  itemSet: any[];
  // item = new Item();
  search = new Search();
  fakeArray = new Array(12);

  public totalAngularPackages;
  public districtList;
  public cityList;
  public categoryList;
  errorMessage;

  constructor(private http: HttpClient, private router: Router) {
  }

  doPOST() {
    console.log("POST");
    console.log("this.search.name - " + this.search.city_id);
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
    }
  )
    .subscribe(
        (val) => {
          this.totalAngularPackages = val
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

    this.doGETdistrictList();
    this.doGETcityList();
    this.doGET();
    this.doGETcategoryList();
 
  }

  async doPOSTClick() {
    console.log("POST");
    this.router.navigateByUrl('/search');
  }
  async doGET() {
    console.log("GET");
    let url = `http://localhost:5102/shop/getshopsforadmin`;
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

  
doActive(val) {

  console.log("POST"  + val);

  console.log("POST");
  console.log("this.search.name - " + this.search.city_id);
  this.http.post("http://localhost:5102/shop/active",
  {
    "id":val,
  }
)
  .subscribe(
      (val) => {
       
        this.doGET();
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

doInactive(val) {

  console.log("POST"  + val);

  console.log("POST");
  console.log("this.search.name - " + this.search.city_id);
  this.http.post("http://localhost:5102/shop/inactive",
  {
    "id":val,
  }
)
  .subscribe(
      (val) => {
       
        this.doGET();
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
  }
}
