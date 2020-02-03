import { NotFoundComponent } from './not-found/not-found.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario/cadastrar/usuario.component';
import { LoginComponent } from './home/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomePageComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'cadastrarUsuario', component: UsuarioComponent },
    ] },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
