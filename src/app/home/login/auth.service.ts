import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private usuarioAutenticado = false;
    mostrarMenu = new EventEmitter<boolean>();
    constructor(private router: Router) { }

    fazerLogin(usuario: User) {
        console.log(usuario.email === 'oi' && usuario.senha === 'oi');
        if (usuario.email === 'oi' && usuario.senha === 'oi') {
            this.usuarioAutenticado = true;
            this.mostrarMenu.emit(true);
            this.router.navigate(['/']);
        } else {
            this.usuarioAutenticado = false;
            this.mostrarMenu.emit(false);

        }
    }
    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }
}
