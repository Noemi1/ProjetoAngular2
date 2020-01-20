import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoasRoutingModule } from './pessoas.routing.module';


@NgModule({
    imports: [
        CommonModule,
        PessoasRoutingModule
    ],
    exports: [    ],
    declarations: [
        PessoaDetailComponent,
        PessoaListComponent,
    ],
    providers: [],

})
export class PessoasModule {

}
