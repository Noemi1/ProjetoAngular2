import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasRountingModule } from './contas.routing.module';
import { ContasAdicionarComponent } from './contas-adicionar/contas-adicionar.component';

// PrimeNG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'node_modules/primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastrModule } from 'ngx-toastr';
import { ContasEscolherClienteComponent } from './contas-escolher-cliente/contas-escolher-cliente.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        CommonModule,
        ContasRountingModule,
        TableModule,
        NgbModule,
        ButtonModule,
        InputMaskModule,
        FormsModule,
        ToastrModule.forRoot(),
        DropdownModule,
    ],
    exports: [],
    declarations: [
        ContasListComponent,
        ContasDetailsComponent,
        ContasAdicionarComponent,
        ContasEscolherClienteComponent,
    ],
    providers: [],

})
export class ContasModule {
}
