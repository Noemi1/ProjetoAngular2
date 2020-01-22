import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PessoasModel } from './../../shared/models/pessoas.model';
import { ApiConnectionServicePessoas } from '../../shared/apiConnectionPessoas.service';

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

    selected: PessoasModel;
    @Input() idPessoa: number;

    constructor(
        private service: ApiConnectionServicePessoas,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.service.refreshList('/pessoas');
    }
    onSelect(item: PessoasModel) {
        if (this.selected !== item) {
            this.selected = item;
            console.log(item);
            this.idPessoa = this.selected.IdPessoa;
            return this.idPessoa;

        } else {
            this.selected = null;
            return this.selected;
        }
    }
}
