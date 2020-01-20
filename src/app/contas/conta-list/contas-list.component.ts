import { Component, OnInit } from '@angular/core';

import { ApiConnectionService } from './../../shared/api-connection.service';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

  constructor(
    private service: ApiConnectionService,
  ) { }

  ngOnInit() {
    this.service.refreshList();
    console.log(this.service.listContas);
  }

}
