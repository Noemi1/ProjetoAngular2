import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ApiConnectionServicePessoas = class ApiConnectionServicePessoas {
    constructor(http) {
        this.http = http;
        this.rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
    }
    refreshList() {
        this.http.get(this.rootURL + '/pessoas').toPromise()
            .then(res => this.listPessoas = res);
    }
    postPaymentDetail() {
        const pessoas = this.http.post(this.rootURL + '/pessoas', this.formData);
        return pessoas;
    }
    putPaymentDetail() {
        return this.http.put(this.rootURL + '/pessoas/' + this.formData.IdPessoa, this.formData);
    }
    deletePaymentDetail(id) {
        return this.http.delete(this.rootURL + '/pessoas/' + id);
    }
};
ApiConnectionServicePessoas = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiConnectionServicePessoas);
export { ApiConnectionServicePessoas };
//# sourceMappingURL=apiConnectionPessoas.service.js.map