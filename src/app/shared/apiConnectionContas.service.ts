import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContasModel } from './models/contas.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
  formData: ContasModel;
  listContas: ContasModel[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    const contas = this.http.post(this.rootURL + '/contas', this.formData);
    // tslint:disable-next-line: no-unused-expression
    return contas;
  }

  refreshList(url: string) {
    this.http.get(this.rootURL + url).toPromise()
      .then(res => this.listContas = res as ContasModel[]);
  }
}
