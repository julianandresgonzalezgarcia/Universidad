import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from 'src/app/Models/alumno';
import { ServicioService } from 'src/app/services/servicio.service';
import { CreateStudentComponent } from '../create-student/create-student.component';
import { Facultad } from 'src/app/Models/facultad';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrera } from 'src/app/Models/carrera';
import { Nota } from 'src/app/Models/nota';
import { Ciclo } from 'src/app/Models/ciclo';
import { Asignatura } from 'src/app/Models/asignatura';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Models/usuario';
import { ConfirmDeleteStudentComponent } from '../confirm-delete-student/confirm-delete-student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { NotesStudentComponent } from '../notes-student/notes-student.component';
import { DirectNotesStudentComponent } from '../direct-notes-student/direct-notes-student.component';
import { DirectUpdateStudentComponent } from '../direct-update-student/direct-update-student.component';
import { DirectDeleteStudentComponent } from '../direct-delete-student/direct-delete-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  fecha = new Date().toLocaleDateString();

  usuario = new Usuario();

  facultades: Facultad[] = [];

  carreras: Carrera[] = [];

  busqueda: String;

  id_alum: number = 0;

  selecciones:any[] = [];

  //id_carre: number;

  //ciclos:Ciclo[] = [];

  //asignaturas:Asignatura[] = [];

  alumnos: Alumno[] = [];

  recarga: boolean = true;

  /*fromBusqueda: FormControl[] = [new FormControl('', [Validators.required]), 
                                  new FormControl('', [Validators.required]), 
                                  new FormControl('', [Validators.required]), 
                                  new FormControl('', [Validators.required])];*/

  //notas:Nota[] = [];

  displayedColumns: string[] = ['id_alumno', 'nombre', 'apellido', 'carrera', 'facultad', 'acciones'];

  constructor(private servicio: ServicioService, private modal: MatDialog, private mensaje: MatSnackBar) { }

  ngOnInit(): void {
    this.servicio.posicion = "Estudiantes"
    this.BuscarUsuarioPorId();
    this.ListarAlumnos();
    this.ListarFacultades();
  }

  BuscarUsuarioPorId(){
    this.servicio.UsuarioPorId(+this.id)
    .subscribe(data =>{
      this.usuario = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarFacultades() {
    this.servicio.ListarFacultad()
      .subscribe(data => {
        this.facultades = data;
      }, (error) => {
        this.Mensaje(error);
      });
  }

  AlumnoPorId(id_alumno: number) {

    if(id_alumno == null){
      this.id_alum = 0;
      this.ListarAlumnos();
    }
    else{
      this.servicio.BuscarAlumnoPorId(id_alumno)
        .subscribe(data => {

          this.alumnos = [];
          this.alumnos[0] = data
          this.recarga = false;

        }, (error) => {
          this.alumnos = [];
          this.Mensaje(error);
        });      
    }

  }

  BuscarAlumnoPorTexto(texto:String) {
    if(texto == ""){
      this.ListarAlumnos();
    }
    else{
    this.servicio.ListarAlumnosPorTexto(texto)
      .subscribe(data => {
        this.alumnos = [];
        this.alumnos = data;
        this.recarga = false;
      }, (error) => {
        this.Mensaje(error);
      });
    }  
  }

  SeleccionFacultad(id_facultad: number) {
    this.servicio.ListarCarrerasPorFacultad(id_facultad)
      .subscribe(data => {
        this.carreras = [];
        this.carreras = data;
      }, (error) => {
        this.Mensaje(error);
      });
  }

  BuscarAlumnosPorFacultad(id_facultad: number) {
    this.servicio.ListarAlumnosPorFacultad(id_facultad)
      .subscribe(data => {
        this.alumnos = data;
        this.recarga = false;
      }, (error) => {
        this.Mensaje(error);
      });
  }

  BuscarAlumnosPorCarrera(id_carrera: number) {
    this.servicio.ListarAlumnosPorCarrera(id_carrera)
      .subscribe(data => {
        this.alumnos = data;
        this.recarga = false;
      }, (error) => {
        this.Mensaje(error);
      });
  }

  ListarAlumnos() {
    this.servicio.ListarAlumno()
      .subscribe(data => {

        this.id_alum = 0;
        this.busqueda = "";
        this.carreras = [];
        this.selecciones = [];        
        this.alumnos = data;
        this.recarga = true;

      }, (error) => {
        this.Mensaje(error);
      });

  }

  PanelCrearAlumno() {
    this.modal.open(CreateStudentComponent);
  }

  PanelNotasAlumno(id_alumno:number){
    localStorage.setItem("id_alumno",id_alumno.toString());
    this.modal.open(NotesStudentComponent);
  }

  PanelActualizarAlumno(id_alumno:number){
    localStorage.setItem("id_alumno",id_alumno.toString());
    this.modal.open(UpdateStudentComponent);
  }

  panelConfirmarBorrado(id_alumno:number){
    localStorage.setItem("id_alumno",id_alumno.toString());
    this.modal.open(ConfirmDeleteStudentComponent);
  }

  panelDirectoNotasAlumno(){
      this.modal.open(DirectNotesStudentComponent);
  }

  panelDirectoActualizarAlumno(){
    this.modal.open(DirectUpdateStudentComponent);
  }

  PanelDirectoBorrarAlumno(){
    this.modal.open(DirectDeleteStudentComponent);
  }
  

}
