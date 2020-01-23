
import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-contas-adicionar',
    templateUrl: './contas-adicionar.component.html',
    styleUrls: ['./contas-adicionar.component.css']
})
export class ContasAdicionarComponent implements OnInit {

    constructor(
        private router: Router,
        private service: ApiConnectionServicePessoas,
    ) { }

    hidden: boolean;

    ngOnInit() {
        this.hidden = true;
    }
    cadastrarCliente() {
        this.router.navigate(['pessoas', 'pessoas-adicionar']);
    }
    escolherCliente() {
        this.router.navigate(['contas', 'contas-adicionar', 'escolher-cliente']);
    }
    proximo(h: boolean) {
        this.hidden = false;
    }
}
