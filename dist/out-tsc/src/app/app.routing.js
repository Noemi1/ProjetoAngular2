import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './home/login/login/login.component';
const APP_ROUTES = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map