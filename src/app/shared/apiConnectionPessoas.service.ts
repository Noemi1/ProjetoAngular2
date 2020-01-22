import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PessoasModel } from './models/pessoas.model';


@Injectable({
  providedIn: 'root'
})
export class ApiConnectionServicePessoas {

  readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
  formData: PessoasModel;
  listPessoas: PessoasModel[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    const pessoas = this.http.post(this.rootURL + '/pessoas', this.formData);
    // tslint:disable-next-line: no-unused-expression
    return pessoas;
  }

  refreshList(url: string) {
    this.http.get(this.rootURL + url).toPromise()
      .then(res => this.listPessoas = res as PessoasModel[]);
  }
}
