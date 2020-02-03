import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasAdicionarComponent } from './contas-adicionar/contas-adicionar.component';
import { PessoaListComponent } from './../pessoas/pessoa-list/pessoa-list.component';
import { PessoasAdicionarComponent } from '../pessoas/pessoas-adicionar/pessoas-adicionar.component';
import { AuthGuard } from './../guards/auth.guard';


const contasRoutes: Routes = [
    { path: 'contas', component: ContasListComponent, canActivate: [ AuthGuard ], children: [
        { path: 'contas-detail/:id', component: ContasDetailsComponent },
        { path: 'contas-detail/:id/editar', component: ContasDetailsComponent },
        { path: 'contas-adicionar', component: ContasAdicionarComponent },
    ]},
    { path: 'pessoas', component: PessoaListComponent, canActivate: [ AuthGuard ], children: [
        { path: 'pessoas-adicionar', component: PessoasAdicionarComponent}
    ]}

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

export class ContasRountingModule { }
