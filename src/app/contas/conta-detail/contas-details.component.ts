import { Router, ActivatedRoute } from '@angular/router';
import { ContasAdicionarComponent } from './../contas-adicionar/contas-adicionar.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VerDetalhesService } from './../ver-detalhes.service';
import { ContasModel } from './../../shared/models/contas.model';
import { ApiConnectionContasService } from 'src/app/shared/apiConnectionContas.service';

@Component({
    selector: 'app-contas-details',
    templateUrl: './contas-details.component.html',
    styleUrls: ['./contas-details.component.css']
})
export class ContasDetailsComponent implements OnInit {

    @Input() dadosConta: ContasModel;
    readonly = true;
    conta: ContasModel;
    constructor(
        private serviceVerDetalhes: VerDetalhesService,
        private serviceApiContas: ApiConnectionContasService,
        private contasAdicionar: ContasAdicionarComponent,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.dadosConta = this.serviceVerDetalhes.getData();
        this.serviceApiContas.formData = this.dadosConta;
    }

    readonlyInput(enabled: boolean) {
        this.readonly = enabled;
    }
    salvarAlteracoes(form: any) {
        if (confirm('Deseja salvar as alterações?')) {
            this.contasAdicionar.onSubmit(form);
            this.router.navigate(['../contas']);
        }
    }
}
