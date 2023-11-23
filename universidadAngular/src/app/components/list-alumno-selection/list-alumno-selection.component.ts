import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-alumno-selection',
  templateUrl: './list-alumno-selection.component.html',
  styleUrls: ['./list-alumno-selection.component.css']
})
export class ListAlumnoSelectionComponent implements OnInit {

  id_carrera:number = this.servicio.nota.asignatura.ciclo.carrera.id_carrera;

  alumnos:Alumno[]= [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.AlumnosPorCarrera();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AlumnosPorCarrera(){
    this.servicio.ListarAlumnosPorCarrera(this.id_carrera)
    .subscribe(data =>{
      this.alumnos = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionAlumno(alumno_seleccion:Alumno){
    this.servicio.nota.alumno = alumno_seleccion;
  }

}
