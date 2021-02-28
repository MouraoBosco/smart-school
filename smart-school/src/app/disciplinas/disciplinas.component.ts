import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  public titulo = 'Disciplinas';
  public disciplinas = [
    { nome:'Matemática'},
    { nome:'Português'},
    { nome:'Filosofia'},
    { nome:'Física'},
    { nome:'Química'},
    { nome:'História'},
    { nome:'Geografia'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
