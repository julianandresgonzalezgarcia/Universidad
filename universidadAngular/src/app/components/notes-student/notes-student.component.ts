import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Carrera } from 'src/app/Models/carrera';
import { Ciclo } from 'src/app/Models/ciclo';
import { Facultad } from 'src/app/Models/facultad';
import { Nota } from 'src/app/Models/nota';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-notes-student',
  templateUrl: './notes-student.component.html',
  styleUrls: ['./notes-student.component.css']
})
export class NotesStudentComponent implements OnInit {

  id = new Number(localStorage.getItem("id_alumno"));

  facultades:Facultad[] = [];

  carreras:Carrera[] = [];

  ciclos:Ciclo[] = [];

  asignaturas:Asignatura[] = [];

  selecciones:any[] = [];

  busqueda:boolean = true;

  notas:Nota[] = [];

  displayedColumns: string[] = ['usuario', 'facultad', 'carrera', 'asignatura', 'ciclo', 'fecha', 'nota'];

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.NotasAlumno();
    this.ListarFacultades();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
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

  SeleccionFacultad(id_facultad:number){
    this.servicio.ListarCarrerasPorFacultad(id_facultad)
    .subscribe(data =>{
      this.carreras = [];
      this.ciclos = [];
      this.asignaturas = [];
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionCarrera(id_carrera:number){
    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.ciclos = [];
      this.asignaturas = [];
      this.ciclos = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionCiclo(id_ciclo:number){
    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{ 
      this.asignaturas = [];
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  BuscarNotasPorFacultad(id_facultad:number){
    this.servicio.ListarNotasPorFacultad(+this.id,id_facultad)
    .subscribe(data =>{
      this.notas = [];
      this.notas = data;
      this.busqueda = false;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  BuscarNotasPorCarrera(id_carrera:number){
    this.servicio.ListarNotasPorCarrera(+this.id,id_carrera)
    .subscribe(data =>{
      this.notas = [];
      this.notas = data;
      this.busqueda = false;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  BuscarNotasPorCiclo(id_ciclo:number){
    this.servicio.ListarNotasPorCiclo(+this.id,id_ciclo)
    .subscribe(data =>{
      this.notas = [];
      this.notas = data;
      this.busqueda = false;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  BuscarNotasPorAsignatura(id_asignatura:number){
    this.servicio.ListarNotasPorAsignatura(+this.id,id_asignatura)
    .subscribe(data =>{
      this.notas = [];
      this.notas = data;
      this.busqueda = false;
    },(error)=>{
      this.Mensaje(error);
    })
  }

  NotasAlumno(){

    this.selecciones = [];    

    this.carreras = [];

    this.ciclos = [];

    this.asignaturas = [];

    this.servicio.ListarNotasPorAlumno(+this.id)
    .subscribe(data =>{
      this.notas = data;
      this.busqueda = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

}
