import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { PessoasAdicionarComponent } from './pessoas-adicionar/pessoas-adicionar.component';
// PrimeNG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'node_modules/primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
let PessoasModule = class PessoasModule {
};
PessoasModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            NgbModule,
            PessoasRoutingModule,
            TableModule,
            ButtonModule,
            InputMaskModule,
        ],
        exports: [],
        declarations: [
            PessoaDetailComponent,
            PessoaListComponent,
            PessoasAdicionarComponent,
        ],
        providers: [],
    })
], PessoasModule);
export { PessoasModule };
//# sourceMappingURL=pessoas.module.js.map