import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoasAdicionarComponent } from './pessoas-adicionar/pessoas-adicionar.component';

const pessoasRoutes: Routes = [
    { path: 'pessoas', component: PessoaListComponent, canActivate: [ AuthGuard ], children: [
        { path: 'pessoas-adicionar', component: PessoasAdicionarComponent },
        { path: 'pessoas-detail/:id', component: PessoaDetailComponent },
        { path: 'pessoas-detail/:id/editar', component: PessoaDetailComponent },
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(pessoasRoutes),
    ],
    exports: [
        RouterModule,
    ],
    declarations: [],
    providers: [],

})
export class PessoasRoutingModule {

}
