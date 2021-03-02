import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoSelecionado: Aluno;
  public titulo = 'Alunos';
  public alunoForm: FormGroup;
  public modalRef: BsModalRef;

  public alunos = [
    {id:1, nome:'Marta', sobrenome:'Serra', telefone: 34578749},
    {id:2, nome:'Paula', sobrenome:'Oliveira', telefone: 974575749},
    {id:3, nome:'Laura', sobrenome:'Kent', telefone: 978575329},
    {id:4, nome:'Luiza', sobrenome:'Machado' , telefone: 948579329},
    {id:5, nome:'Lucas', sobrenome:'Alvares' , telefone: 948789029},
    {id:6, nome:'Paulo', sobrenome:'Souza' , telefone: 983689078},
    {id:7, nome:'Pedro', sobrenome:'Luiz' , telefone:9263496078},
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
    this.criarForm();
   }
   ngOnInit() {

   }
  alunoSelect(aluno:Aluno) {

    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  alunoSubmit() {
    console.log(this.alunoForm)
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome:['', Validators.required],
      telefone:['', Validators.required],
    });
  }
  
}
