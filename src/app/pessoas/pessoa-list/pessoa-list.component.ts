import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ApiConnectionServicePessoas } from '../../shared/apiConnectionPessoas.service';
import { ApiConnectionContasService } from 'src/app/shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';
import { ContasListComponent } from './../../contas/conta-list/contas-list.component';
import { PessoasModel } from './../../shared/models/pessoas.model';
import { FilterUtils } from 'primeng/utils';

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

    @Input() idPessoa: number;
    private touchTime = 0;
    cols: any[];
    selected: PessoasModel;

    constructor(
        private service: ApiConnectionServicePessoas,
        private toastr: ToastrService,
        private router: Router,
        private serviceContasAPI: ApiConnectionContasService,
        private serviceContas: ContasListComponent
    ) { }

    ngOnInit() {
        this.service.refreshList();

        // Tabela
        // Header
        this.cols = [
            { field: 'IdPessoa', header: 'Id' },
            { field: 'NomePessoa', header: 'Nome' },
            { field: 'DataNascPessoa', header: 'Nascimento' },
            { field: 'RgPessoa', header: 'Rg' },
            { field: 'CpfPessoa', header: 'CPF' },
            { field: 'Endereco', header: 'Endereço' },
            { field: 'NumeroEnd', header: 'Número' },
            { field: 'Cep', header: 'CEP' },
        ];
        // Filtro
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

    // Selecionar item na lista
    onSelect(item: PessoasModel) {
        if (this.selected !== item) {
            this.selected = item;
            this.idPessoa = this.selected.IdPessoa;
            return this.idPessoa;

        } else {
            this.selected = null;
            return this.selected;
        }
    }

    // Validdacao de exclusao de pessoa e conta
    onDelete(pessoa: PessoasModel) {
        this.serviceContasAPI.getContas().forEach((e: ContasModel[]) => {
            const i = e.filter((o: ContasModel) => o.IdPessoa === pessoa.IdPessoa);
            if (i.length > 0) {
                if (confirm('Existem contas vinculadas a esta conta. Deseja excluir?')) {
                    // tslint:disable-next-line: forin
                    for (const oi in i) {
                        console.log(i[oi]);
                        this.serviceContas.onDelete(i[oi]);
                        this.deletar(pessoa);
                    }
                }
            } else {
                this.deletar(pessoa);
            }
        });
    }

    // Excluir pessoa
    deletar(pessoa: PessoasModel) {
        this.service.deletePaymentDetail(pessoa.IdPessoa).subscribe(
            res => {
                this.service.refreshList();
                this.service.formData = {
                    IdPessoa: 0,
                    NomePessoa: '',
                    DataNascPessoa: '',
                    RgPessoa: '',
                    CpfPessoa: '',
                    Endereco: '',
                    NumeroEnd: '',
                    Cep: '',
                };
            },
            err => {
                console.log(err);
                this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
            }
        );
    }

    // Ver detalhes da pessoa
    verDetalhesMobile(pessoa: PessoasModel) {
        if (this.touchTime === 0) {
            // set first click
            this.onSelect(pessoa);
            this.touchTime = new Date().getTime();
        } else {
            // compare first click to this click and see if they occurred within double click threshold
            if (((new Date().getTime()) - this.touchTime) < 500) {
                // double click occurred
                this.router.navigate(['pessoas/pessoas-detail', this.idPessoa]);
                this.touchTime = 0;
            } else {
                // not a double click so set as a new first click
                this.onSelect(pessoa);
                this.touchTime = new Date().getTime();
            }
        }
    }


}
