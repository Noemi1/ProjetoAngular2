import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContasModel } from './models/contas.model';
import { PessoasModel } from './models/pessoas.model';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/ 
  formData: ContasModel;
  listContas: ContasModel[];
  listPessoas: PessoasModel[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/contas', this.formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/contas').toPromise()
      .then(res => this.listContas = res as ContasModel[]);

  }


}
