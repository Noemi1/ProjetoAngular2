import { PessoasModel } from './../../shared/models/pessoas.model';
import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';
import { ToastrService } from 'ngx-toastr';
// import * as Inputmask from 'inputmask';
import { Router } from '@angular/router';

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
        // Inputmask().mask(document.querySelectorAll('input'));
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

}