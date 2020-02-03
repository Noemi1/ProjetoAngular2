import { AppModule } from './../app.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerPerfilComponent } from './perfil/ver-perfil.component';
import { UsuarioComponent } from './cadastrar/usuario.component';
import { routing } from './../app.routing';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    UsuarioComponent,
    VerPerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    ShowHidePasswordModule
  ],
})
export class UsuarioModule { }
