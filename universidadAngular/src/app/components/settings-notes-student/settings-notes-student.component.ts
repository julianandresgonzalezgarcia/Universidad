import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/Models/alumno';
import { Asignatura } from 'src/app/Models/asignatura';
import { Nota } from 'src/app/Models/nota';
import { ServicioService } from 'src/app/services/servicio.service';
import { ConfirmDeleteNoteComponent } from '../confirm-delete-note/confirm-delete-note.component';
import { FormControl, Validators } from '@angular/forms';
import { ListAsignaturaSelectionComponent } from '../list-asignatura-selection/list-asignatura-selection.component';
import { ListAlumnoSelectionComponent } from '../list-alumno-selection/list-alumno-selection.component';

@Component({
  selector: 'app-settings-notes-student',
  templateUrl: './settings-notes-student.component.html',
  styleUrls: ['./settings-notes-student.component.css']
})
export class SettingsNotesStudentComponent implements OnInit {

  idAlumno = new Number(localStorage.getItem("id_alumno"));

  id = new Number(localStorage.getItem("id_usuario"));

  notas:Nota[] = [];

  nota_inicial = new Nota();

  //asignaturas:Asignatura[] = [];

  alumnos:Alumno[] = [];

  displayedColumns: string[] = ['Id_nota', 'Asignatura', 'Alumno', 'Fecha', 'Nota', 'Acciones'];

  cargar_info_nota:boolean = false;

  edicion:boolean = false;

  posicion:Number | null | undefined;

  fromNota = new FormControl('',[Validators.required, Validators.maxLength(1)]);

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }


  ngOnInit(): void {
    this.NotasAlumno();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AlumnosPorCarrera(id_carrera:number){

    this.alumnos = [];

    this.servicio.ListarAlumnosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.alumnos = data; 
    },(error)=>{
      this.Mensaje(error);
    });
  }

  NotasAlumno(){
    this.servicio.ListarNotasPorAlumno(+this.idAlumno)
    .subscribe(data =>{
      this.notas = data;
      this.AlumnosPorCarrera(data[0].asignatura.ciclo.carrera.id_carrera);
    },(error)=>{
      this.Mensaje(error);
    });
  }

  NotaPorId(id_nota:number){
    this.servicio.BuscarNotaPorId(id_nota)
    .subscribe(data =>{
      this.AlumnosPorCarrera(data.asignatura.ciclo.carrera.id_carrera);
      this.servicio.nota = data;      
      this.cargar_info_nota = true;      
    },(error)=>{
      this.Mensaje(error);
    });
  }

  EditarNota(index:number, nota:Nota){

    this.NotaPorId(nota.id_nota);

    this.nota_inicial = nota;

    this.posicion = index;

  }

  ConprobacionEdicionNota(){
    if(this.edicion){
      location.reload();
    }
  }


  ActualizarNota(id_nota:number,nota:Nota){  

    this.posicion = null;

    if(this.servicio.nota.asignatura.id_asignatura == null){
      this.Mensaje('Por favor seleccione un asignatura');
    }
    else if(this.servicio.nota.alumno.id_alumno == null){
      this.Mensaje('Por favor seleccione un estudiante');
    }
    else if(this.fromNota.invalid){
      this.Mensaje('Por favor digite una nota de 0 a 5');
    }
    else{

      if((nota.asignatura.id_asignatura == this.nota_inicial.asignatura.id_asignatura) && (nota.alumno.id_alumno == this.nota_inicial.alumno.id_alumno) && (nota.nota == this.nota_inicial.nota)){
        this.edicion = false
      }
      else{
        this.servicio.ActualizarNota(id_nota,nota)
        .subscribe(data =>{
          this.edicion = true;
          this.NotasAlumno();
          
        },(error)=>{
          this.Mensaje(error);
        });         
      }
      
    }
    
  }

  PanelSeleccionAsignatura(){
    this.modal.open(ListAsignaturaSelectionComponent);
  }

  PanelSeleccionAlumno(){
    this.modal.open(ListAlumnoSelectionComponent);
  }

  BorrarNota(id_nota:number){

    localStorage.setItem("id_nota",id_nota.toString());
    this.modal.open(ConfirmDeleteNoteComponent);
    
  }


}
