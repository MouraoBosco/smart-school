import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Disciplina } from '../models/Disciplina';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  public discForm: FormGroup;
  public discSelecionada: Disciplina;
  public titulo = 'Disciplinas';
  public modalRef: BsModalRef;


  public disciplinas = [
    {id:1, nome:'Matemática', professor: 'Raphael'},
    {id:2, nome:'Português', professor:'Glória' },
    {id:3, nome:'Programação', professor:'Sérgio' },
    {id:4, nome:'Física', professor:'Tereza' },
    {id:5, nome:'Inglês', professor:'Valéria' },
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
    this.discForm = this.fb.group({
      nome: ['', Validators.required],
      professor:['', Validators.required],
    });
  }

  discSelect(disciplinas:Disciplina) {
    this.discSelecionada = disciplinas;
    this.discForm.patchValue(disciplinas);
  }

  discSubmit() {
    console.log(this.discForm);
  }

  voltar() {
    this.discSelecionada = null;
  }
  
}
