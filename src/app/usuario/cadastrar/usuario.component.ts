import { UsuarioModel } from './../../shared/models/usuario.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ApiConnectionServiceUsuario } from './../../shared/apiConnectionUsuario.service';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    oi = [];
    temUser = false;
    temEmail = false;

    form: FormGroup;

    constructor(
        private serviceApiUser: ApiConnectionServiceUsuario,
        private toastr: ToastrService,
    ) { }

    ngOnInit() {
        this.resetForm();
    }
    resetForm(form?: NgForm) {
        if (form != null) {
            form.resetForm();
        }
        this.serviceApiUser.formUser = {
            IdUser: 0,
            User: '',
            Email: '',
            Senha: ''
        };
    }
    cadastrarUsuario(usuario: NgForm) {
        this.verificarEmail(usuario);
        if (this.temUser && this.temEmail) {
            alert('Já existe um email e um usuario com esse nome, tente novamente');
        } else if (this.temUser) {
            alert('Já existe um usuario com esse nome, tente novamente');
        } else if (this.temEmail) {
            alert('Já existe um email com esse nome, tente novamente');
        } else {
            this.onSubmit(usuario);
        }
    }
    verificarEmail(valor) {
        this.serviceApiUser.getUsuarios().forEach(users => {

            this.oi = users as Array<UsuarioModel>;

            const user = this.oi.find(e => e.User === valor.value.User);
            const email = this.oi.find(e => e.Email === valor.value.Email);

            if (this.oi.length > 0) {
                if (user) {
                    this.temUser = true;
                } else {
                    this.temUser = false;
                }
                if (email) {
                    this.temEmail = true;
                } else {
                    this.temEmail = false;
                }
            }
        });
        return [this.temEmail, this.temUser];
    }
    onSubmit(form: NgForm) {
        if (this.serviceApiUser.formUser.IdUser === 0) {
            this.insertRecord(form);
        } else {
            console.log('else');
            this.updateRecord(form);
        }
    }
    insertRecord(form: NgForm) {
        this.serviceApiUser.postUsuario().subscribe(
            res => {
                this.resetForm(form);
                this.toastr.success('Sucesso', 'Cadastrado com Sucesso!!');
                this.serviceApiUser.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }
    updateRecord(form: NgForm) {
        this.serviceApiUser.putUsuario(form).subscribe(
            res => {
                this.toastr.success('Sucesso', 'Atualizado com Sucesso!!');
                this.serviceApiUser.refreshList();
            },
            err => {
                console.log(err);
                this.toastr.error('Deu erro man!', 'Error');
            }
        );
    }
}
