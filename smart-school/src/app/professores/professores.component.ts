import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public professores = [
    {nome: 'Raphael'},
    {nome:'Tereza'},
    {nome:'Glória'},
    {nome:'Valéri'},
    {nome:'Sérgio'},
    {nome:'Felipe'},
    {nome:'Bruno'},
    {nome:'Heloísa'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
