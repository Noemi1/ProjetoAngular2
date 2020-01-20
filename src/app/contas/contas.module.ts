import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasRountingModule } from './contas.routing.module';


// PrimeNG
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        ContasRountingModule,
        TableModule,
    ],
    exports: [],
    declarations: [
        ContasListComponent,
        ContasDetailsComponent,
    ],
    providers: [],

})
export class ContasModule {

}

export interface Contas {
    IdConta: number;
    Agencia: number;
    NumeroConta: number;
    DataAbertura: number;
    IdPessoa: number;
}
