import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiConnectionContasService = class ApiConnectionContasService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
    }
    postPaymentDetail() {
        const contas = this.http.post(this.rootURL + '/contas', this.formData);
        return contas;
    }
    refreshList() {
        this.http.get(this.rootURL + '/contas').toPromise()
            .then(res => this.listContas = res);
    }
    deleteConta(id) {
        return this.http.delete(this.rootURL + '/contas/' + id);
    }
};
ApiConnectionContasService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiConnectionContasService);
export { ApiConnectionContasService };
//# sourceMappingURL=apiConnectionContas.service.js.map