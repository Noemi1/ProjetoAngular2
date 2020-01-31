import { LoginComponent } from './home/login/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContasModule } from './contas/contas.module';
import { PessoasModule } from './pessoas/pessoas.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ContasModule,
    PessoasModule,
    NgbModule,
    BrowserAnimationsModule,
    PasswordModule,
    ShowHidePasswordModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
