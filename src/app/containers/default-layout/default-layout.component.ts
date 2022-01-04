import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { navItems } from '../../_nav';
import { userId } from '../../global-variable';
import { Detail } from './Detail';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  detail = new Detail();
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  ngOnInit(): void {

    if(sessionStorage.getItem("userId")){
      this.detail.user_id = sessionStorage.getItem("userId");
    }else{
      this.detail.user_id = '0';
    }

    

  }

}
