import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContasDetailsComponent = class ContasDetailsComponent {
    constructor(id, service) {
        this.id = id;
        this.service = service;
    }
    ngOnInit() {
        console.log(this.id.selected);
    }
    resetForm(form) {
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
};
ContasDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contas-details',
        templateUrl: './contas-details.component.html',
        styleUrls: ['./contas-details.component.css']
    })
], ContasDetailsComponent);
export { ContasDetailsComponent };
//# sourceMappingURL=contas-details.component.js.map