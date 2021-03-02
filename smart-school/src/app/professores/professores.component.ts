import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorForm: FormGroup;
  public profSelecionado: Professor;
  public titulo = 'Professores';
  public modalRef: BsModalRef;
  
  public professores = [
    {id:1, nome: 'Raphael', disciplina: 'Matemática'},
    {id:2, nome:'Tereza', disciplina: 'Física'},
    {id:3, nome:'Glória', disciplina: 'Português'},
    {id:4, nome:'Valéria', disciplina: 'Inglês'},
    {id:5, nome:'Sérgio', disciplina: 'Programação'},

  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb:FormBuilder,
    private modalService: BsModalService,
    ) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina:['', Validators.required],
    });
  }

  profSelect(professor:Professor) {
    this.profSelecionado = professor;
    this.professorForm.patchValue(professor);
  } 

  professorSubmit() {
    console.log(this.professorForm);
  }

  voltar() {
    this.profSelecionado = null;
  }

  

}
