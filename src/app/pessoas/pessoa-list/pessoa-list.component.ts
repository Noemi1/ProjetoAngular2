import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
        private toastr: ToastrService,
        private router: Router,
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
    verDetalhes(form: PessoasModel) {
        this.router.navigate(['pessoas/pessoas-detail', this.idPessoa]);
        console.log(form);
        return form;
    }
}
