import { PessoasModel } from './../../shared/models/pessoas.model';
import { ApiConnectionServicePessoas } from './../../shared/apiConnectionPessoas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PessoaListComponent } from './../pessoa-list/pessoa-list.component';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  oi: PessoasModel;

  constructor(
    private router: Router,
    private service: PessoaListComponent,
    private pessoaDetalhe: PessoaListComponent,
  ) { }

  ngOnInit() {
  }

}
