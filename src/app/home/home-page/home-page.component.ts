import { Component, OnInit } from '@angular/core';

interface Pessoa {
  Nome: string;
  Idade: number;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  pessoas: Pessoa[];
  a = [] as any;
  constructor() {
    this.pessoas = [
      { Nome: 'Noemi', Idade: 19 },
      { Nome: 'Joao', Idade: 21 },
      { Nome: 'Marcia', Idade: 24 },
      { Nome: 'Carol', Idade: 98 },
      { Nome: 'Tiago', Idade: 45 },
      { Nome: 'Almeida', Idade: 26 },
    ];
  }

  ngOnInit() {
    this.getPessoas().forEach(e => {
      this.a.push(e);
    });
    // console.log(this.a);
    for (const pessoa of this.a) {
      // console.log(pessoa);

    }
  }
  getPessoas() {
    return this.pessoas;
  }

}
