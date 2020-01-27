"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ApiConnectionServicePessoas = /** @class */ (function () {
    function ApiConnectionServicePessoas(http) {
        this.http = http;
        this.rootURL = 'http://localhost:54966/api'; /*Configurar a Porta do Visual Studio aqui*/
    }
    ApiConnectionServicePessoas.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/pessoas').toPromise()
            .then(function (res) { return _this.listPessoas = res; });
    };
    ApiConnectionServicePessoas.prototype.postPaymentDetail = function () {
        var pessoas = this.http.post(this.rootURL + '/pessoas', this.formData);
        return pessoas;
    };
    ApiConnectionServicePessoas.prototype.putPaymentDetail = function () {
        return this.http.put(this.rootURL + '/pessoas/' + this.formData.IdPessoa, this.formData);
    };
    ApiConnectionServicePessoas.prototype.deletePaymentDetail = function (id) {
        return this.http["delete"](this.rootURL + '/pessoas/' + id);
    };
    ApiConnectionServicePessoas = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiConnectionServicePessoas);
    return ApiConnectionServicePessoas;
}());
exports.ApiConnectionServicePessoas = ApiConnectionServicePessoas;
