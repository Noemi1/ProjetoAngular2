import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    FormsModule,
    Router,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    PasswordModule,
    ShowHidePasswordModule
  ]
})
export class HomeModule { }
