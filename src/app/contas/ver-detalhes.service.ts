import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContasModel } from './../shared/models/contas.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerDetalhesService {
  readonly rootURL = 'http://localhost:54966/api';
  constructor(
    private http: HttpClient,) { }
  private data: any = undefined;

  setData(contaDetalhes: ContasModel) {
    this.data = contaDetalhes;
  }
  getData(): any {
    return this.data;
  }
}
