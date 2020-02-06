import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './home/login/auth.service';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContasModule } from './contas/contas.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginComponent } from './home/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
        LoginComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        ContasModule,
        PessoasModule,
        UsuarioModule,
        NgbModule,
        BrowserAnimationsModule,
        PasswordModule,
        ShowHidePasswordModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
