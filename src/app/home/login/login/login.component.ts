import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Login {
  email: string;
  senha: string;

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Login[];
  userdigit: Login;


  logado = false;

  constructor() {
    this.usuarios = [
      { email: 'noemi@gmail.com', senha: 'cadomeew' },
      { email: 'ana@gmail.com', senha: 'cadomeew' },
      { email: 'joao@gmail.com', senha: 'cadomeew' },
      { email: 'flavio@gmail.com', senha: 'cadomeew' },
      { email: 'almeida@gmail.com', senha: 'cadomeew' },
      { email: 'cavalcanti@gmail.com', senha: 'cadomeew' },
      { email: 'joana@gmail.com', senha: 'cadomeew' },
    ];
  }

  ngOnInit() {
    this.userdigit = { email: '', senha: '' };
    this.logado = false;
    // this.disallowNavigation();
  }
  getUsuarios() {
    return this.usuarios;
  }
  getUsuario(user): boolean {
    const usuario = this.getUsuarios().find((email) => email.email === user.email && email.senha === user.senha);
    if (usuario) {
      console.log(usuario);
      console.log('Entrou');
      this.logado = true;
      return this.logado;
    } else if (!usuario) {
      console.log('Nao entrou');
      this.logado = false;
      return this.logado;
    }
  }
  disallowNavigation() {
    // console.log(this.getUsuario());
  }
}
