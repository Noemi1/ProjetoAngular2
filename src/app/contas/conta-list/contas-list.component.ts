import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';

import { ApiConnectionContasService } from '../../shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';

@Component({
    selector: 'app-contas-list',
    templateUrl: './contas-list.component.html',
    styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

    selected: ContasModel;
    @Input() idConta: number;
    conta: ContasModel;
    list: ContasModel[];

    constructor(
        private service: ApiConnectionContasService,
        private toastr: ToastrService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.service.refreshList();
        this.list = this.service.listContas;
    }
    onSelect(item: ContasModel) {
        if (this.selected !== item) {
            this.selected = item;
            this.idConta = this.selected.IdConta;
            return this.idConta;
        } else {
            this.selected = null;
            return this.selected;
        }
    }
    onDelete(contas: ContasModel) {
        this.service.deleteConta(contas.IdConta).subscribe(
            res => {
                this.service.formData = {
                    IdConta: 0,
                    Agencia: '',
                    NumeroConta: '',
                    DataAbertura: '',
                    IdPessoa: 0,
                };
                this.service.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
            }
        );
    }

    verDetalhes(conta: ContasModel) {
        this.router.navigate(['contas/contas-detail', this.idConta]);
        this.conta = conta;
        console.log(this.conta.IdConta);
        return this.conta;
    }
}
