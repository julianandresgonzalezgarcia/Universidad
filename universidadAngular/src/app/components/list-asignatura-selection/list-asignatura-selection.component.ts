import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { Asignatura } from 'src/app/Models/asignatura';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-asignatura-selection',
  templateUrl: './list-asignatura-selection.component.html',
  styleUrls: ['./list-asignatura-selection.component.css']
})
export class ListAsignaturaSelectionComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  asignaturas:Asignatura[] = [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.AsignaturasDelUsuario();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AsignaturasDelUsuario(){
    this.servicio.ListarAsignaturasPorUsuario(+this.id)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionAsignatura(asignatura_seleccion:Asignatura){
    this.servicio.nota.asignatura = asignatura_seleccion;
    this.servicio.nota.alumno = new Alumno();
    
  }


}
