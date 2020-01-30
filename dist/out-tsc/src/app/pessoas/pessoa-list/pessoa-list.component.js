import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let PessoaListComponent = class PessoaListComponent {
    constructor(service, toastr, http) {
        this.service = service;
        this.toastr = toastr;
        this.http = http;
    }
    ngOnInit() {
        this.service.refreshList();
    }
    onSelect(item) {
        if (this.selected !== item) {
            this.selected = item;
            console.log(item);
            this.idPessoa = this.selected.IdPessoa;
            return this.idPessoa;
        }
        else {
            this.selected = null;
            return this.selected;
        }
    }
    onDelete(pessoa) {
        if (confirm('Tem certeza que deseja deletar o registro?')) {
            this.service.deletePaymentDetail(pessoa.IdPessoa).subscribe(res => {
                this.service.refreshList();
                this.service.formData = {
                    IdPessoa: 0,
                    NomePessoa: '',
                    DataNascPessoa: '',
                    RgPessoa: '',
                    CpfPessoa: '',
                    Endereco: '',
                    NumeroEnd: '',
                    Cep: '',
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
], PessoaListComponent.prototype, "idPessoa", void 0);
PessoaListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pessoa-list',
        templateUrl: './pessoa-list.component.html',
        styleUrls: ['./pessoa-list.component.css']
    })
], PessoaListComponent);
export { PessoaListComponent };
//# sourceMappingURL=pessoa-list.component.js.map