import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Login } from './login';
import { author, title, userId, userDetailList } from '../../global-variable';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,

  ]
})


export class LoginComponent implements OnInit {

  login = new Login();

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void { }


  doPOST() {
    console.log("POST");
    console.log("this.login.name - " + this.login.userName);
    this.http.post<any>("http://localhost:5102/user/login",
      {
        "userName": this.login.userName,
        "password": this.login.password,
      }
    )
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val.result[0]);

            sessionStorage.setItem("userId", val.result[0].id);
            sessionStorage.setItem("name", val.result[0].name);
            sessionStorage.setItem("profile_pic", val.result[0].profile_pic);
            sessionStorage.setItem("user_name", val.result[0].user_name);
            sessionStorage.setItem("searchWord", "");
         
            document.location.href='http://localhost:4200/#/dashboard';
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }


}
