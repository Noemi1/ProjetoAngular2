import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContasModule } from './contas/contas.module';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './home/login/login/login.component';
import { PessoasModule } from './pessoas/pessoas.module';
import { routing } from './app.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ContasModule,
    PessoasModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
