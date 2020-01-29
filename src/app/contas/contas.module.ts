import { ContasModel } from './../shared/models/contas.model';
import { PessoaListComponent } from './../pessoas/pessoa-list/pessoa-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { ContasListComponent } from './conta-list/contas-list.component';
import { ContasDetailsComponent } from './conta-detail/contas-details.component';
import { ContasAdicionarComponent } from './contas-adicionar/contas-adicionar.component';
import { ContasRountingModule } from './contas.routing.module';

// PrimeNG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'node_modules/primeng/table';
import { ButtonModule } from 'primeng/button';
// import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export let options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
    imports: [
        CommonModule,
        ContasRountingModule,
        TableModule,
        NgbModule,
        ButtonModule,
        // InputMaskModule,
        FormsModule,
        ToastrModule.forRoot(),
        NgxMaskModule.forRoot(options),
    ],
    exports: [],
    declarations: [
        ContasListComponent,
        ContasDetailsComponent,
        ContasAdicionarComponent,
    ],
    providers: [
        PessoaListComponent,
        ContasAdicionarComponent,
        ContasModel,
    ],

})
export class ContasModule {
}
