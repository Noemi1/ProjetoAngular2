"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ApiConnectionContasService = /** @class */ (function () {
    function ApiConnectionContasService(http) {
        this.http = http;
        this.rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
    }
    ApiConnectionContasService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/contas').toPromise()
            .then(function (res) { return _this.listContas = res; });
    };
    ApiConnectionContasService.prototype.postPaymentDetail = function () {
        var contas = this.http.post(this.rootURL + '/contas', this.formData);
        return contas;
    };
    ApiConnectionContasService.prototype.putPaymentDetail = function () {
        return this.http.put(this.rootURL + '/contas/' + this.formData.IdConta, this.formData);
    };
    ApiConnectionContasService.prototype.deleteConta = function (id) {
        return this.http["delete"](this.rootURL + '/contas/' + id);
    };
    ApiConnectionContasService.prototype.getConta = function () {
        return this.http.get(this.rootURL + '/contas');
    };
    ApiConnectionContasService.prototype.getList = function () {
        return this.listContas;
    };
    ApiConnectionContasService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiConnectionContasService);
    return ApiConnectionContasService;
}());
exports.ApiConnectionContasService = ApiConnectionContasService;
