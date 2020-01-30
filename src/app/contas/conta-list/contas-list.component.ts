import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
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
    private touchTime = 0;

    constructor(
        private serviceApiContas: ApiConnectionContasService,
        private toastr: ToastrService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.serviceApiContas.refreshList();
        this.cols = [
            { header: 'Id', field: 'IdConta' },
            { header: 'Agencia', field: 'Agencia' },
            { header: 'Conta', field: 'NumeroConta' },
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
    deletarConta(conta: ContasModel) {
        if (confirm('Tem certeza que deseja deletar o registro?')) {
            this.onDelete(conta);
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
    verDetalhesMobile(item: any) {
        if (this.touchTime === 0) {
            // set first click
            this.onSelect(item);
            this.touchTime = new Date().getTime();
        } else {
            // compare first click to this click and see if they occurred within double click threshold
            if (((new Date().getTime()) - this.touchTime) < 500) {
                // double click occurred
                this.router.navigate(['contas/contas-detail', this.idConta]);
                this.touchTime = 0;
            } else {
                // not a double click so set as a new first click
                this.onSelect(item);
                this.touchTime = new Date().getTime();
            }
        }
    }
}
