import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ContasModel } from './../../shared/models/contas.model';
import { ContasListComponent } from './../conta-list/contas-list.component';
import { ContasAdicionarComponent } from './../contas-adicionar/contas-adicionar.component';
import { ApiConnectionContasService } from 'src/app/shared/apiConnectionContas.service';

@Component({
    selector: 'app-contas-details',
    templateUrl: './contas-details.component.html',
    styleUrls: ['./contas-details.component.css']
})
export class ContasDetailsComponent implements OnInit {

    conta = ContasModel as object;
    contaDeletar: ContasModel;
    desabilitar = true;
    textBtnHabilidarEdicao = 'Habilitar Edição';
    id = + this.activatedRoute.snapshot.paramMap.get('id');

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private salvarDados: ContasAdicionarComponent,
        private serviceApiContas: ApiConnectionContasService,
        private deletar: ContasListComponent,
    ) { }

    ngOnInit() {
        this.getContaDetalhe();
        this.serviceApiContas.refreshList();
    }
    getContaDetalhe() {
        this.serviceApiContas.getContas().forEach(e => {
            // tslint:disable: forin
            for (const key in e) {
                if ((e[key])) {
                    if (e[key].IdConta === this.id) {
                        this.conta = e[key];
                        this.serviceApiContas.formData = {
                            IdConta: e[key].IdConta,
                            Agencia: e[key].Agencia,
                            NumeroConta: e[key].NumeroConta,
                            DataAbertura: e[key].DataAbertura,
                            IdPessoa: e[key].IdPessoa,
                        };
                    }
                }
            }
            return this.conta;
        });
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
    habilitarEdicao(): boolean {
        this.desabilitar = !this.desabilitar;
        if (this.desabilitar) {
            this.textBtnHabilidarEdicao = 'Habilitar Edição';
        } else {
            this.textBtnHabilidarEdicao = 'Desabilitar Edição';
        }
        return this.desabilitar;
    }
    deletarConta() {
        if (confirm('Os dados não serão recuperados, deseja continuar?')) {
            this.serviceApiContas.getContas().forEach(e => {
                // tslint:disable: forin
                for (const key in e) {
                    if ((e[key])) {
                        if (e[key].IdConta === this.id) {
                            this.deletar.onDelete(e[key]);
                            this.serviceApiContas.refreshList();
                        }
                    }
                }
                return this.conta;
            });

        }
    }

    salvarAlteracoes(form: NgForm): void {
        console.log(form);
        this.salvarDados.onSubmit(form);
    }
}
