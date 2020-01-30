import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ContasListComponent = class ContasListComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.service.refreshList();
    }
    onSelect(item) {
        if (this.selected !== item) {
            this.selected = item;
            console.log(item);
            this.idConta = this.selected.IdConta;
            return this.idConta;
        }
        else {
            this.selected = null;
            return this.selected;
        }
    }
    onDelete(contas) {
        if (confirm('Tem certeza que deseja deletar o registro?')) {
            this.service.deleteConta(contas.IdConta).subscribe(res => {
                this.service.refreshList();
                this.service.formData = {
                    IdConta: 0,
                    Agencia: '',
                    NumeroConta: '',
                    DataAbertura: '',
                    IdPessoa: 0,
                };
            }, err => {
                console.log(err);
                this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
            });
        }
    }
};
tslib_1.__decorate([
    Input()
], ContasListComponent.prototype, "idConta", void 0);
ContasListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contas-list',
        templateUrl: './contas-list.component.html',
        styleUrls: ['./contas-list.component.css']
    })
], ContasListComponent);
export { ContasListComponent };
//# sourceMappingURL=contas-list.component.js.map