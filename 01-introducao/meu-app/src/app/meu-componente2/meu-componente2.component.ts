import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente2',
  templateUrl: './meu-componente2.component.html',
  styleUrls: ['./meu-componente2.component.scss']
})
export class MeuComponente2Component implements OnInit {
  nome: string = "Bruno"
  aluno = {
    dados:{
      nome: "bruno"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
