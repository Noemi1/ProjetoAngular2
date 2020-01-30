import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoasAdicionarComponent } from './pessoas-adicionar/pessoas-adicionar.component';
const pessoasRoutes = [
    { path: 'pessoas', component: PessoaListComponent, children: [
            { path: 'pessoas-adicionar', component: PessoasAdicionarComponent },
            { path: 'pessoas-detail/:id', component: PessoaDetailComponent },
            { path: 'pessoas-detail/:id/editar', component: PessoaDetailComponent },
        ] },
];
let PessoasRoutingModule = class PessoasRoutingModule {
};
PessoasRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(pessoasRoutes),
        ],
        exports: [
            RouterModule,
        ],
        declarations: [],
        providers: [],
    })
], PessoasRoutingModule);
export { PessoasRoutingModule };
//# sourceMappingURL=pessoas.routing.module.js.map