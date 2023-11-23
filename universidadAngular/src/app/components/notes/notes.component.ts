import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Carrera } from 'src/app/Models/carrera';
import { Ciclo } from 'src/app/Models/ciclo';
import { Facultad } from 'src/app/Models/facultad';
import { Nota } from 'src/app/Models/nota';
import { ServicioService } from 'src/app/services/servicio.service';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { Alumno } from 'src/app/Models/alumno';
import { SettingsNotesStudentComponent } from '../settings-notes-student/settings-notes-student.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  asignaturas:Asignatura[] = [];

  facultades:Facultad[] = [];

  carreras:Carrera[] = [];

  ciclos:Ciclo[] = [];

  asignaturasFiltro:Asignatura[] = [];

  selecciones:any[] = [];

  notas:Nota[] = [];

  filtro_id_alumno:number;

  filtro_texto:String;

  busqueda:boolean = false;

  notasAlumno:Nota[] = []; 

  alumno = new Alumno();

  carga_alumno:boolean = false;

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {
    this.servicio.posicion = "Mis estudiantes y notas"
    this.ListarAlumnosPorMaestro();
    this.ListarAsignaturasDelUsaurio();
    this.ListarFacultades();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarAlumnosPorMaestro(){

    this.busqueda = false;

    this.filtro_id_alumno = 0;

    this.filtro_texto = ""

    this.selecciones = [];  

    this.carreras = [];

    this.ciclos = [];

    this.asignaturasFiltro = [];

    localStorage.removeItem("id_alumno"); 

    this.servicio.ListarAlumnosPorNotasPorMaestro(+this.id)
    .subscribe(data =>{
      this.notas = data;

    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarFacultades(){
    this.servicio.ListarFacultad()
    .subscribe(data =>{
      this.facultades = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionFacultad(id_asignatura:number){
    this.busqueda = true;
    this.servicio.ListarCarrerasPorFacultad(id_asignatura)
    .subscribe(data =>{
      this.carreras = data;
      this.ciclos = [];
      this.asignaturasFiltro = [];
    },(error) =>{
      this.Mensaje(error);
    });
  }

  SeleccionCarrera(id_carrera:number){
    this.busqueda = true;
    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.ciclos = data;
      this.asignaturasFiltro = [];
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionCiclo(id_ciclo:number){
    this.busqueda = true;
    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{
      this.asignaturasFiltro = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  filtroAlumnoListarAlumnosPorMaestro(id_alumno:number){

    if(id_alumno == null){
      this.ListarAlumnosPorMaestro();
    }
    else{
      this.busqueda = true;

      this.notas = [];    

      this.servicio.ListarAlumnosPorNotasPorMaestroFiltroIdAlumno(+this.id,id_alumno)
      .subscribe(data =>{

        if(data != null){
          this.notas[0] = data;
        }
        else{
          this.notas = [];
          this.Mensaje('Alumno no encontrado');
        }

      },(error)=>{
        this.Mensaje(error);
      });
    }


  }

  filtroTextoListarAlumnosPorMaestro(texto:String){

    if(texto == ""){
      this.ListarAlumnosPorMaestro();
    }
    else{
      this.busqueda = true;

      this.notas = [];    

      this.servicio.ListarAlumnosPorNotasPorMaestroFiltroTexto(+this.id,texto)
      .subscribe(data =>{
        this.notas = data;
      },(error)=>{
        this.Mensaje(error);
      });      
    }


  }

  filtroFacultadListarAlumnosPorMaestro(id_facultad:number){

    this.busqueda = true;

    this.notas = [];    

    this.servicio.ListarAlumnosPorNotasPorMaestroFiltroFacultad(+this.id,id_facultad)
    .subscribe(data =>{
      this.notas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  filtroCarreraListarAlumnosPorMaestro(id_carrera:number){

    this.busqueda = true;

    this.notas = [];    

    this.servicio.ListarAlumnosPorNotasPorMaestroFiltroCarrera(+this.id,id_carrera)
    .subscribe(data =>{
      this.notas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  filtroCicloListarAlumnosPorMaestro(id_ciclo:number){

    this.busqueda = true;

    this.notas = [];    

    this.servicio.ListarAlumnosPorNotasPorMaestroFiltroCiclo(+this.id,id_ciclo)
    .subscribe(data =>{
      this.notas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  filtroAsignaturaListarAlumnosPorMaestro(id_asignatura:number){

    this.busqueda = true;

    this.notas = [];    

    this.servicio.ListarAlumnosPorNotasPorMaestroFiltroAsignatura(+this.id,id_asignatura)
    .subscribe(data =>{
      this.notas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }


  NotasAlumno(id_alumno:number){
    
    localStorage.setItem("id_alumno",id_alumno.toString());

    this.servicio.ListarNotasPorAlumno(id_alumno)
    .subscribe(data =>{
      this.notasAlumno = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  AlumnoPorId(id_alumno:number){
    this.servicio.BuscarAlumnoPorId(id_alumno)
    .subscribe(data =>{
      this.alumno = data;
      this.carga_alumno = true;
    },(error)=>{
      this.Mensaje(error);
    })
  }

  ListarAsignaturasDelUsaurio(){
    this.servicio.ListarAsignaturasPorUsuario(+this.id)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }


  ListarAlumnos() {
    this.servicio.ListarNotasPorMaestro(+this.id)
      .subscribe(data => {
        this.notas = data;
      }, (error) => {
        this.Mensaje(error);
      });
  }

  panelCrearNota(){
    this.modal.open(CreateNoteComponent);
  }

  PanelConfiguracionNotas(){

    if(localStorage.getItem("id_alumno") != null){
      this.modal.open(SettingsNotesStudentComponent);
    }
    else{
      this.Mensaje('Seleccione un estudiante para poder realizar la configuracion de las notas');
    }

  }



}
