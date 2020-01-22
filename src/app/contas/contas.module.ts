import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasRountingModule } from './contas.routing.module';
import { ContasAdicionarComponent } from './contas-adicionar/contas-adicionar.component';

// PrimeNG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'node_modules/primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
    imports: [
        CommonModule,
        ContasRountingModule,
        TableModule,
        NgbModule,
        ButtonModule,
        InputMaskModule,
        FormsModule,
    ],
    exports: [],
    declarations: [
        ContasListComponent,
        ContasDetailsComponent,
        ContasAdicionarComponent
    ],
    providers: [],

})
export class ContasModule {
    public myModel = '3213213211';
    public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
