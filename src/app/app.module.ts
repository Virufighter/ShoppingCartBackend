import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { UsernavComponent } from './usernav/usernav.component';

const myrout:Routes=[
  {
    path:"",
    component:AdminComponent
    
  },
  {
    path:"ulogin",
    component:LoginComponent
    
  },
  {
    path:"ureg",
    component:UserRegistrationComponent
  },
  {
    path:"add",
    component:AddProductComponent

  },
  {
    path:"view",
    component:ViewProductComponent

  },
  {
    path:"search",
    component:SearchProductComponent
  },{
    path:"uview",
    component:UserViewComponent
  },{
    path:"usearch",
    component:UsersearchComponent
  }
  

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    UserRegistrationComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    UserViewComponent,
    UsersearchComponent,
    UsernavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myrout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
