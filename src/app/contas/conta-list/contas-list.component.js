"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ContasListComponent = /** @class */ (function () {
    function ContasListComponent(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
    }
    ContasListComponent.prototype.ngOnInit = function () {
        this.service.refreshList();
        this.list = this.service.listContas;
    };
    ContasListComponent.prototype.onSelect = function (item) {
        if (this.selected !== item) {
            this.selected = item;
            this.idConta = this.selected.IdConta;
            return this.idConta;
        }
        else {
            this.selected = null;
            return this.selected;
        }
    };
    ContasListComponent.prototype.onDelete = function (contas) {
        var _this = this;
        this.service.deleteConta(contas.IdConta).subscribe(function (res) {
            _this.service.formData = {
                IdConta: 0,
                Agencia: '',
                NumeroConta: '',
                DataAbertura: '',
                IdPessoa: 0
            };
            _this.service.refreshList();
        }, function (err) {
            console.log(err);
            _this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
        });
    };
    ContasListComponent.prototype.verDetalhes = function (conta) {
        this.router.navigate(['contas/contas-detail', this.idConta]);
        this.conta = conta;
        console.log(this.conta.IdConta);
        return this.conta;
    };
    __decorate([
        core_1.Input()
    ], ContasListComponent.prototype, "idConta");
    ContasListComponent = __decorate([
        core_1.Component({
            selector: 'app-contas-list',
            templateUrl: './contas-list.component.html',
            styleUrls: ['./contas-list.component.css']
        })
    ], ContasListComponent);
    return ContasListComponent;
}());
exports.ContasListComponent = ContasListComponent;
