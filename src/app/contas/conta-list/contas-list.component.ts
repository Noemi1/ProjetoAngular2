import { VerDetalhesService } from './../ver-detalhes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input} from '@angular/core';
import { FilterUtils } from 'primeng/utils';

import { ApiConnectionContasService } from '../../shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';

@Component({
    selector: 'app-contas-list',
    templateUrl: './contas-list.component.html',
    styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

    @Input() idConta: number;
    selected: ContasModel;
    cols: any[];
    contaDetalhes: ContasModel;
    conta: ContasModel;

    constructor(
        private serviceApiContas: ApiConnectionContasService,
        private toastr: ToastrService,
        private router: Router,
        private serviceVerDetalhes: VerDetalhesService,
    ) { }

    ngOnInit() {
        this.serviceApiContas.refreshList();
        this.cols = [
            { header: 'Id', field: 'IdConta' },
            { header: 'Agencia', field: 'Agencia' },
            { header: 'Conta', field: 'NUmeroConta' },
            { header: 'Abertura', field: 'DataAbertura' },
            { header: 'Titular', field: 'IdPessoa' },
        ];

        // tslint:disable: no-string-literal
        // tslint:disable: radix
        FilterUtils['custom'] = (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }
            if (value === undefined || value === null) {
                return false;
            }
            return parseInt(filter) > value;
        };
        this.serviceApiContas.getConta();
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
        this.serviceApiContas.deleteConta(contas.IdConta).subscribe(
            res => {
                this.serviceApiContas.formData = {
                    IdConta: 0,
                    Agencia: '',
                    NumeroConta: '',
                    DataAbertura: '',
                    IdPessoa: 0,
                };
                this.serviceApiContas.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
            }
        );
    }
    getContas(conta: ContasModel): void {
        this.serviceApiContas.getContas().subscribe(() => this.conta = conta);
        this.serviceVerDetalhes.setData(conta);
        this.router.navigate(['contas/contas-detail', this.idConta]);
    }
    // verDetalhes(conta: ContasModel) {
    //     this.router.navigate(['contas/contas-detail', this.idConta]);
    //     this.serviceVerDetalhes.setData(conta);
    // }
}
