import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiConnectionService } from '../../shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';

@Component({
    selector: 'app-contas-list',
    templateUrl: './contas-list.component.html',
    styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

    selected: ContasModel;
    @Input() idConta: number;

    constructor(
        private service: ApiConnectionService
    ) { }

    ngOnInit() {
        this.service.refreshList('/contas');
    }
    onSelect(item: ContasModel) {
        if (this.selected !== item) {
            this.selected = item;
            console.log(item);
            this.idConta = this.selected.IdConta;
            return this.idConta;
        } else {
            this.selected = null;
            return this.selected;
        }
    }
}
