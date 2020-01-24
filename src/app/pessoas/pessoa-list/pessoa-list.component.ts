import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ApiConnectionServicePessoas } from '../../shared/apiConnectionPessoas.service';
import { ApiConnectionContasService } from 'src/app/shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';
import { ContasListComponent } from './../../contas/conta-list/contas-list.component';
import { PessoasModel } from './../../shared/models/pessoas.model';

@Component({
    selector: 'app-pessoa-list',
    templateUrl: './pessoa-list.component.html',
    styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

    selected: PessoasModel;
    @Input() idPessoa: number;
    @Input() oi: PessoasModel;
    pessoa: PessoasModel;
    conta: ContasModel;


    conts: ContasModel;

    constructor(
        private service: ApiConnectionServicePessoas,
        private toastr: ToastrService,
        private router: Router,
        private serviceContasAPI: ApiConnectionContasService,
        private serviceContas: ContasListComponent
    ) { }

    ngOnInit() {
        this.service.refreshList();
    }
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
    onDelete(pessoa: PessoasModel) {
        // tslint:disable: no-var-keyword
        // tslint:disable: forin
        this.serviceContasAPI.getConta().forEach((e) => {
            for (const i in e) {
                if (pessoa.IdPessoa === e[i].IdPessoa) {
                    if (confirm('Esta conta está vinculada a outras contas. A conta ' + e[i].NumeroConta + ' será deletada. Continuar?')) {
                        this.serviceContas.onDelete(e[i]);
                        this.deletar(pessoa);
                    }
                } else {
                    this.deletar(pessoa);
                }
            }
            this.deletar(pessoa);
        });


    }
    deletar(pessoa: PessoasModel) {
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
    verDetalhes(pessoa: PessoasModel) {
        this.router.navigate(['pessoas/pessoas-detail', this.idPessoa]);
        this.pessoa = pessoa;
        this.oi = this.pessoa;
        return this.pessoa;
    }

}
