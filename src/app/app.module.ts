import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'

import { AuthComponent } from './auth/auth.component';
import { NavComponent } from './nav/nav.component';
import {RoutingModule} from "./Routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropDownDirective} from "./nav/DropDownDirective";
import {ProductCardComponent} from "./product-list/product-card/product-card.component";
import {ProductService} from "./Services/product.service";
import {ProductListComponent} from "./product-list/product-list.component";
import {HttpClientModule} from "@angular/common/http";
import {SpinnerComponent} from "./spinner/spinner.component";
import {AlertComponent} from "./alert/AlertComponent";



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuthComponent,
        NavComponent,
        RegisterComponent,
        DropDownDirective,
        ProductCardComponent,
        ProductListComponent,
        SpinnerComponent,
        AlertComponent

    ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
