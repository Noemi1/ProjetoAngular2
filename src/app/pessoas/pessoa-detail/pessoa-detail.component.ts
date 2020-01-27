import { PessoaListComponent } from './../pessoa-list/pessoa-list.component';
import { PessoasModel } from './../../shared/models/pessoas.model';
import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-pessoa-detail',
    templateUrl: './pessoa-detail.component.html',
    styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

    pessoa: PessoasModel;
    constructor(
        private pessoaSelected: PessoaListComponent,
    ) { }

    ngOnInit() {
    }
}
