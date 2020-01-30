import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContasAdicionarComponent = class ContasAdicionarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    cadastrarCliente() {
        this.router.navigate(['pessoas', 'pessoas-adicionar']);
    }
    escolherCliente() {
        this.router.navigate(['contas', 'contas-adicionar', 'escolher-cliente']);
    }
};
ContasAdicionarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contas-adicionar',
        templateUrl: './contas-adicionar.component.html',
        styleUrls: ['./contas-adicionar.component.css']
    })
], ContasAdicionarComponent);
export { ContasAdicionarComponent };
//# sourceMappingURL=contas-adicionar.component.js.map