import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasAdicionarComponent } from './contas-adicionar/contas-adicionar.component';
import { PessoasAdicionarComponent } from '../pessoas/pessoas-adicionar/pessoas-adicionar.component';
const contasRoutes = [
    { path: 'contas', component: ContasListComponent, children: [
            { path: 'contas-detail/:id', component: ContasDetailsComponent },
            { path: 'contas-detail/:id/editar', component: ContasDetailsComponent },
            { path: 'contas-adicionar', component: ContasAdicionarComponent },
        ] },
    { path: '/pessoas/pessoas-adicionar', component: PessoasAdicionarComponent }
];
let ContasRountingModule = class ContasRountingModule {
};
ContasRountingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(contasRoutes)
        ],
        exports: [
            RouterModule
        ],
        declarations: [],
        providers: [],
    })
], ContasRountingModule);
export { ContasRountingModule };
//# sourceMappingURL=contas.routing.module.js.map