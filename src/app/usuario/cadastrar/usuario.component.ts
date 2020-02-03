import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { apiConnectionServiceUsuario } from './../../shared/apiConnectionUsuario.service';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
    usuarios = this.serviceApiUser.getUsuarios().forEach(e => {
        e.hasOwnProperty('IdUser');
    });
    constructor(
        private serviceApiUser: apiConnectionServiceUsuario,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit() {
        this.resetForm();
        console.log(this.usuarios);
    }
    resetForm(form?: NgForm) {
        console.log(form);

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
        console.log(usuario.valueChanges);
        this.onSubmit(usuario);
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
