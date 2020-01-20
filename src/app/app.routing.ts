import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginComponent },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
