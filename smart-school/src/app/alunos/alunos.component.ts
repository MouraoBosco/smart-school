import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  public titulo = 'Alunos';
  public alunos = [
    {id:1, nome:'Marta', sobrenome:'Serra', telefone: 34578749},
    {id:2, nome:'Paula', sobrenome:'Oliveira', telefone: 974575749},
    {id:3, nome:'Laura', sobrenome:'Kent', telefone: 978575329},
    {id:4, nome:'Luiza', sobrenome:'Machado' , telefone: 948579329},
    {id:5, nome:'Lucas', sobrenome:'Alvares' , telefone: 948789029},
    {id:6, nome:'Paulo', sobrenome:'Souza' , telefone: 983689078},
    {id:7, nome:'Pedro', sobrenome:'Luiz' , telefone:9263496078},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
