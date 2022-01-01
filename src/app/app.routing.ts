import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {ExampleComponent} from "./views/example/example.component";
import { SearchComponent } from './views/search/search.component';
// import {ItemCardViewComponent} from "./views/itemcardview/itemcardview.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: {
      title: 'Example Page'
    }
  }
  ,
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./views/search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'itemCardView',
        loadChildren: () => import('./views/itemcardview/itemCardView.module').then(m => m.ItemCardViewModule)
      }
      ,
      {
        path: 'offersView',
        loadChildren: () => import('./views/offersview/offersView.module').then(m => m.OffersViewModule)
      },
      {
        path: 'postJob',
        loadChildren: () => import('./views/postjob/postJob.module').then(m => m.PostJobModule)
      }
      ,
      {
        path: 'addShop',
        loadChildren: () => import('./views/addshop/addShop.module').then(m => m.AddShopModule)
      }
      ,
      {
        path: 'viewShop',
        loadChildren: () => import('./views/viewshop/viewShop.module').then(m => m.ViewShopModule)
      }
      ,
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
      }
      ,
      {
        path: 'addUser',
        loadChildren: () => import('./views/addUser/addUser.module').then(m => m.AddUserModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./views/map/map.module').then(m => m.MapModule)
      },
      {
        path: 'offersPanel',
        loadChildren: () => import('./views/offerspanel/offerspanel.module').then(m => m.OffersPanelModule)
      },
      {
        path: 'jobsPanel',
        loadChildren: () => import('./views/jobspanel/jobspanel.module').then(m => m.JobsPanelModule)
      }
      ,
      {
        path: 'itemsPanel',
        loadChildren: () => import('./views/itemspanel/itemspanel.module').then(m => m.ItemsPanelModule)
      }
      ,
      {
        path: 'shopsPanel',
        loadChildren: () => import('./views/shopspanel/shopspanel.module').then(m => m.ShopsPanelModule)
      }
      ,
      {
        path: 'userPanel',
        loadChildren: () => import('./views/userpanel/userpanel.module').then(m => m.UserPanelModule)
      }
      ,
      {
        path: 'reportPanel',
        loadChildren: () => import('./views/reportpanel/reportpanel.module').then(m => m.ReportPanelModule)
        
      }      
      ,
      {
        path: 'itemsPanelReport',
        loadChildren: () => import('./views/itemspanelreport/itemspanelreport.module').then(m => m.ItemsPanelReportModule)
        
      }     
      ,
      {
        path: 'shopsPanelReport',
        loadChildren: () => import('./views/shopspanelreport/shopspanelreport.module').then(m => m.ShopsPanelReportModule)
        
      }     
      ,
      {
        path: 'profileEdit',
        loadChildren: () => import('./views/profileedit/profileedit.module').then(m => m.ProfileEditModule)
        
      }  
      ,
      {
        path: 'payment',
        loadChildren: () => import('./views/payment/payment.module').then(m => m.PaymentModule)
        
      } 

    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
