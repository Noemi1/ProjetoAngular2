import { ContasModule } from './../contas/contas.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ContasModel } from './models/contas.model';
import { Observable, of, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ApiConnectionContasService {

    readonly rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/

    public formData: ContasModel;
    listContas: ContasModel[];

    constructor(
        private http: HttpClient,
    ) { }

    refreshList() {
        this.http.get(this.rootURL + '/contas').toPromise()
            .then(res => this.listContas = res as ContasModel[]);
    }
    postPaymentDetail() {
        const contas = this.http.post(this.rootURL + '/contas', this.formData);
        return contas;
    }
    putPaymentDetail() {
        return this.http.put(this.rootURL + '/contas/' + this.formData.IdConta, this.formData);
    }
    deleteConta(id) {
        return this.http.delete(this.rootURL + '/contas/' + id);
    }
    getContas() {
        return this.http.get(this.rootURL + '/contas');
    }

}
