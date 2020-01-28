
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ApiConnectionContasService } from 'src/app/shared/apiConnectionContas.service';

@Component({
    selector: 'app-contas-adicionar',
    templateUrl: './contas-adicionar.component.html',
    styleUrls: ['./contas-adicionar.component.css']
})
export class ContasAdicionarComponent implements OnInit {

    d: Date = new Date();

    constructor(
        private router: Router,
        private service: ApiConnectionContasService,
        private toastr: ToastrService,
    ) { }

    hidden: boolean;
    date: string;
    ngOnInit() {
        this.hidden = true;
        this.resetForm();
    }
    cadastrarCliente() {
        this.router.navigate(['pessoas', 'pessoas-adicionar']);
    }
    escolherCliente() {
        this.router.navigate(['contas', 'contas-adicionar', 'escolher-cliente']);
    }
    proximo(hidden: boolean) {
        this.hidden = hidden;
        return this.hidden;
    }
    resetForm(form?: NgForm) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            IdConta: 0,
            Agencia: '',
            NumeroConta: '',
            DataAbertura: '',
            IdPessoa: null,
        };
    }
    onSubmit(form: NgForm) {
        if (this.service.formData.IdConta === 0) {
            this.insertRecord(form);
        } else {
            this.updateRecord(form);
        }
    }
    insertRecord(form: NgForm) {
        this.service.postPaymentDetail().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Sucesso', 'Cadastrado com Sucesso!!');
                this.service.refreshList();
                this.router.navigate(['../contas']);
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }
    updateRecord(form: NgForm) {
        this.service.putPaymentDetail().subscribe(
            res => {
                this.toastr.success('Sucesso', 'Atualizado com Sucesso!!');
                this.service.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }
    cancelar(form: NgForm) {
        if (this.hidden !== false) {
            this.router.navigate(['../contas']);
        } else {
            if (form.touched) {
                if (confirm('Os dados serão perdidos. Deseja continuar?')) {
                    this.proximo(true);
                }
            } else {
                this.proximo(true);
            }
        }
    }
}
