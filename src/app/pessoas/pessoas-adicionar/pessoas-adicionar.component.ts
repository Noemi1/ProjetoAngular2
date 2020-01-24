import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, } from '@angular/router';

import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';

@Component({
    selector: 'app-pessoas-adicionar',
    templateUrl: './pessoas-adicionar.component.html',
    styleUrls: ['./pessoas-adicionar.component.css']
})
export class PessoasAdicionarComponent implements OnInit {

    constructor(
        private service: ApiConnectionServicePessoas,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit() {
        this.resetForm();
    }
    resetForm(form?: NgForm) {
        if (form != null) {
            form.resetForm();
        }
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
    }
    onSubmit(form: NgForm) {
        if (this.service.formData.IdPessoa === 0) {
            this.insertRecord(form);
            console.log('if')
        } else {
            console.log('else')
            this.updateRecord(form);
        }
    }
    insertRecord(form: NgForm) {
        this.service.postPaymentDetail().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Sucesso', 'Cadastrado com Sucesso!!');
                this.service.refreshList();
                this.router.navigate(['../pessoas']);
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
                this.resetForm(form);
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
        if (form.touched) {
            if (confirm('Os dados serão perdidos. Deseja continuar?')) {
                this.router.navigate(['../pessoas']);
            }
        } else {
            this.router.navigate(['../pessoas']);
        }
    }
}
