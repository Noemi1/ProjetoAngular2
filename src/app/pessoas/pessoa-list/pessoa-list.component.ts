import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PessoasModel } from './../../shared/models/pessoas.model';
import { ContasModel } from './../../shared/models/contas.model';
import { ApiConnectionServicePessoas } from '../../shared/apiConnectionPessoas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

    selected: PessoasModel;
    @Input() idPessoa: number;
    contaPessoa: ContasModel[];

    constructor(
        private service: ApiConnectionServicePessoas,
        private toastr: ToastrService,
        private http: HttpClient,
    ) { }

    ngOnInit() {
        this.service.refreshList();
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
    onDelete(pessoa: PessoasModel) {
        if (confirm('Tem certeza que deseja deletar o registro?')) {
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
    }
}
