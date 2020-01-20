import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';

const pessoasRoutes: Routes = [
    { path: 'pessoas', component: PessoaListComponent, children: [
        { path: 'pessoa-detail/:id', component: PessoaDetailComponent },
        { path: 'pessoa-detail/:id/editar', component: PessoaDetailComponent }
    ] },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pessoasRoutes),
    ],
    exports: [],
    declarations: [],
    providers: [],

})
export class PessoasRoutingModule {

}
