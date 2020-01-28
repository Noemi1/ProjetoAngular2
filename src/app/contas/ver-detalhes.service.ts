import { Injectable } from '@angular/core';

import { ContasModel } from './../shared/models/contas.model';

@Injectable({
  providedIn: 'root'
})
export class VerDetalhesService {

  constructor() { }
  private data: any = undefined;

  setData(contaDetalhes: ContasModel) {
    this.data = contaDetalhes;
  }
  getData(): any {
    return this.data;

  }
}
