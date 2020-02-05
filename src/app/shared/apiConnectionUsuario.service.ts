import { of } from 'rxjs';
import { UsuarioModel } from './models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PessoasModel } from './models/pessoas.model';

@Injectable({
    providedIn: 'root'
})
export class ApiConnectionServiceUsuario {

    readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/

    public formUser: UsuarioModel;
    listUsers: UsuarioModel[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootURL + '/usuarios').toPromise()
            .then(res => this.listUsers = res as UsuarioModel[]);
    }
    postUsuario() {
        const usuario = this.http.post(this.rootURL + '/usuarios', this.formUser);
        return usuario;
    }
    putUsuario(usuario) {
        return this.http.put(this.rootURL + '/usuarios/' + this.formUser.IdUser, usuario);
    }
    deleteUsuario(id) {
        return this.http.delete(this.rootURL + '/usuarios/' + id);
    }
    getUsuarios() {
        return this.http.get(this.rootURL + '/usuarios');
    }

}
