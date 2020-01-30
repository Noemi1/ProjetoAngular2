import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { PessoasModel } from './../shared/models/pessoas.model';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoasAdicionarComponent } from './pessoas-adicionar/pessoas-adicionar.component';
import { ContasListComponent } from './../contas/conta-list/contas-list.component';

// PrimeNG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'node_modules/primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
// import { InputMaskModule } from 'primeng/inputmask';

import { NgxMaskModule, IConfig } from 'ngx-mask';
export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        PessoasRoutingModule,
        TableModule,
        ButtonModule,
        // InputMaskModule,
        NgxMaskModule.forRoot(options),
        DropdownModule,
    ],
    exports: [],
    declarations: [
        PessoaDetailComponent,
        PessoaListComponent,
        PessoasAdicionarComponent,
    ],
    providers: [
        NgForm,
        ContasListComponent,
        PessoaListComponent,
        PessoasModel,
        PessoasAdicionarComponent
    ],

})
export class PessoasModule {

}
