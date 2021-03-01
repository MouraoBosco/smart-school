import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public professores = [
    {id:1, nome: 'Raphael', disciplina: 'Matemática'},
    {id:2, nome:'Tereza', disciplina: 'Física'},
    {id:3, nome:'Glória', disciplina: 'Português'},
    {id:4, nome:'Valéria', disciplina: 'Inglês'},
    {id:5, nome:'Sérgio', disciplina: 'Programação'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
