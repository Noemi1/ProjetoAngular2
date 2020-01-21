import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiConnectionService } from './../../shared/api-connection.service';
import { ContasModel } from './../../shared/models/contas.model';

@Component({
  selector: 'app-contas-list',
  templateUrl: './contas-list.component.html',
  styleUrls: ['./contas-list.component.css']
})
export class ContasListComponent implements OnInit {

  selected: ContasModel;
  id: string;
  constructor(
    private service: ApiConnectionService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.service.refreshList();
  }
  onSelect(item: ContasModel) {
    if (this.selected !== item) {
      this.selected = item;
      console.log(this.selected);
      return item;
    } else {
      this.selected = null;
      return this.selected;
    }
  }
}
