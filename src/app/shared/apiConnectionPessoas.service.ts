import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PessoasModel } from './models/pessoas.model';

@Injectable({
    providedIn: 'root'
})
export class ApiConnectionServicePessoas {

    readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/

    public formData: PessoasModel;
    listPessoas: PessoasModel[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootURL + '/pessoas').toPromise()
            .then(res => this.listPessoas = res as PessoasModel[]);
    }
    postPaymentDetail() {
        const pessoas = this.http.post(this.rootURL + '/pessoas', this.formData);
        return pessoas;
    }
    putPaymentDetail(pessoa) {
        return this.http.put(this.rootURL + '/pessoas/' + this.formData.IdPessoa, pessoa);
    }
    deletePaymentDetail(id) {
        return this.http.delete(this.rootURL + '/pessoas/' + id);
    }
    getPessoas() {
        return this.http.get(this.rootURL + '/pessoas/');
    }

}
