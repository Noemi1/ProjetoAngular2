import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContasListComponent } from './../conta-list/contas-list.component';
import { ApiConnectionContasService } from '../../shared/apiConnectionContas.service';

@Component({
  selector: 'app-contas-details',
  templateUrl: './contas-details.component.html',
  styleUrls: ['./contas-details.component.css']
})
export class ContasDetailsComponent implements OnInit {

  constructor(
    private id: ContasListComponent,
    private service: ApiConnectionContasService, ) { }

  ngOnInit() {
  }
  resetForm(form?: NgForm) {
    if (form != null) {
        form.resetForm();
    }
    this.service.formData = {
      IdConta: 0,
      Agencia: '',
      NumeroConta: '',
      DataAbertura: '',
      IdPessoa: 0,
    };
  }
}
