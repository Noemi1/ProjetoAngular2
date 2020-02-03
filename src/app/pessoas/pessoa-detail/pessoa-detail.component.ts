import { PessoasAdicionarComponent } from './../pessoas-adicionar/pessoas-adicionar.component';
import { PessoaListComponent } from './../pessoa-list/pessoa-list.component';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PessoasModel } from './../../shared/models/pessoas.model';
import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';

@Component({
    selector: 'app-pessoa-detail',
    templateUrl: './pessoa-detail.component.html',
    styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

    id = + this.activatedRoute.snapshot.paramMap.get('id');
    pessoa = PessoasModel as object;
    desabilitar = true;
    textBtnHabilidarEdicao = 'Habilitar Edição';

    constructor(
        private activatedRoute: ActivatedRoute,
        private serviceApiPessoas: ApiConnectionServicePessoas,
        private location: Location,
        private deletarPessoa: PessoaListComponent,
        private salvarDados: PessoasAdicionarComponent,
    ) { }
    ngOnInit() {
        this.getPessoaDetalhe();
        this.serviceApiPessoas.refreshList();
    }
    getPessoaDetalhe() {
        this.serviceApiPessoas.getPessoas().forEach(e => {
            // tslint:disable: forin
            for (const key in e) {
                if ((e[key])) {
                    if (e[key].IdPessoa === this.id) {
                        this.pessoa = e[key];
                        this.serviceApiPessoas.formData = {
                            IdPessoa: e[key].IdPessoa,
                            NomePessoa: e[key].NomePessoa,
                            DataNascPessoa: e[key].DataNascPessoa,
                            RgPessoa: e[key].RgPessoa,
                            CpfPessoa: e[key].CpfPessoa,
                            Endereco: e[key].Endereco,
                            NumeroEnd: e[key].NumeroEnd,
                            Cep: e[key].Cep,
                        };
                    }
                }
            }
            return this.pessoa;
        });
    }
    habilitarEdicao(): boolean {
        this.desabilitar = !this.desabilitar;
        if (this.desabilitar) {
            this.textBtnHabilidarEdicao = 'Habilitar Edição';
        } else {
            this.textBtnHabilidarEdicao = 'Desabilitar Edição';
        }
        return this.desabilitar;
    }
    voltar(form: NgForm) {
        if (form.untouched) {
            this.location.back();
        } else {
            if ( confirm('Você pode perder as alterações, deseja sair?') ) {
                this.location.back();
            }
        }
    }
    onDelete() {
        if (confirm('Os dados não serão recuperados, deseja continuar?')) {
            this.serviceApiPessoas.getPessoas().forEach(e => {
                // tslint:disable: forin
                for (const key in e) {
                    if ((e[key])) {
                        if (e[key].IdPessoa === this.id) {
                            this.deletarPessoa.onDelete(e[key]);
                            this.serviceApiPessoas.refreshList();
                            this.location.back();
                        }
                    }
                }
                return this.pessoa;
            });
        }
    }
    salvarAlteracoes(form: NgForm): void {
        console.log(form)
        this.salvarDados.onSubmit(form);
    }
}
