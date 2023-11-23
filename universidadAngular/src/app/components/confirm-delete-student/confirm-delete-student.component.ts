import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-confirm-delete-student',
  templateUrl: './confirm-delete-student.component.html',
  styleUrls: ['./confirm-delete-student.component.css']
})
export class ConfirmDeleteStudentComponent implements OnInit {

  id_alumno = new Number(localStorage.getItem("id_alumno"));

  alumno = new Alumno()

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.AlumnoPorId();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AlumnoPorId(){
    this.servicio.BuscarAlumnoPorId(+this.id_alumno)
    .subscribe(data =>{
      this.alumno = data;
      console.log(this.alumno);
    },(error)=>{
      this.Mensaje('Error al buscar al alumno');
    });
  }

  EliminarAlumno(id_alumno:number){
    this.servicio.BorrarAlumno(id_alumno)
    .subscribe(data =>{
      location.reload();
    },(error)=>{
      this.Mensaje(error);
    })
  }

}
