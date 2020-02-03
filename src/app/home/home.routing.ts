import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomePageComponent, children: [
        {path: 'login', component: LoginComponent}
    ] },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
