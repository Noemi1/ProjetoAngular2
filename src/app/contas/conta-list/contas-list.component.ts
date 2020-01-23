import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiConnectionContasService } from '../../shared/apiConnectionContas.service';
import { ContasModel } from './../../shared/models/contas.model';

@Component({
    selector: 'app-contas-list',
    templateUrl: './contas-list.component.html',
    styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

    selected: ContasModel;
    @Input() idConta: number;

    constructor(
        private service: ApiConnectionContasService,
        private toastr: ToastrService,
    ) { }

    ngOnInit() {
        this.service.refreshList();
    }
    onSelect(item: ContasModel) {
        if (this.selected !== item) {
            this.selected = item;
            console.log(item);
            this.idConta = this.selected.IdConta;
            return this.idConta;
        } else {
            this.selected = null;
            return this.selected;
        }
    }
    onDelete(contas: ContasModel) {
        if (confirm('Tem certeza que deseja deletar o registro?')) {
            this.service.deleteConta(contas.IdConta).subscribe(
                res => {
                    this.service.refreshList();
                    this.service.formData = {
                        IdConta: 0,
                        Agencia: '',
                        NumeroConta: '',
                        DataAbertura: '',
                        IdPessoa: 0,
                    };
                },
                err => {
                    console.log(err);
                    this.toastr.error('Delete unsuccessfully', 'Please select one row to delete');
                }
            );
        }
    }
}
