import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';

const contasRoutes: Routes = [
    { path: 'contas', component: ContasListComponent, children: [
        { path: 'contas-detail/:id', component: ContasDetailsComponent },
        { path: 'contas-detail/:id/editar', component: ContasDetailsComponent }
    ] },

];
@NgModule({
    imports: [
        RouterModule.forChild(contasRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],

})

export class ContasRountingModule {  }
