import { LoginComponent } from './home/login/login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomePageComponent, children: [
        { path: 'login', component: LoginComponent },
    ] },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
