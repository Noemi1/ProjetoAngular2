import { ToastrService } from 'ngx-toastr';
import { ApiConnectionServiceUsuario } from './../../shared/apiConnectionUsuario.service';
import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private usuarioAutenticado = false;
    mostrarMenu = new EventEmitter<boolean>();
    constructor(
        private router: Router,
        private toastr: ToastrService,
        private serviceApiUser: ApiConnectionServiceUsuario,
    ) { }

    fazerLogin(usuario: User) {
        this.serviceApiUser.getUsuarios().forEach(users => {
            // tslint:disable: forin
            users = users as Array<User>;
            for (const user in users) {
                if (usuario.email === users[user].Email && usuario.senha === users[user].Senha) {
                    this.usuarioAutenticado = true;
                    this.mostrarMenu.emit(true);
                    this.router.navigate(['/']);
                    return this.usuarioAutenticado;
                } else {
                    this.mostrarMenu.emit(false);
                    this.toastr.error('Erro', 'Usuario ou senha inválidos');
                    console.log('Login inválido');
                    continue;
                }
            }
        });

        // if (usuario.email === 'oi' && usuario.senha === 'oi') {
        //     this.usuarioAutenticado = true;
        //     this.mostrarMenu.emit(true);
        //     this.router.navigate(['/']);
        // } else {
        //     this.usuarioAutenticado = false;
        //     this.mostrarMenu.emit(false);

        // }
    }
    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }
}
