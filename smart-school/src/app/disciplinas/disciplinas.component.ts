import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  public titulo = 'Disciplinas';
  public disciplinas = [
    {id:1, nome:'Matemática', professor: 'Raphael'},
    {id:2, nome:'Português', professor:'Glória' },
    {id:3, nome:'Programação', professor:'Sérgio' },
    {id:4, nome:'Física', professor:'Tereza' },
    {id:5, nome:'Inglês', professor:'Valéria' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
