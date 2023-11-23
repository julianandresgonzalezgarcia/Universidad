import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Usuario } from 'src/app/Models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-user-selection',
  templateUrl: './list-user-selection.component.html',
  styleUrls: ['./list-user-selection.component.css']
})
export class ListUserSelectionComponent implements OnInit {

  usuarios:Usuario[] = [];

  asignaturas:Asignatura[] = [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarUsuarios();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarUsuarios(){

    var id_facultad = this.servicio.asignaturas_subject_component[this.servicio.indice_lista].ciclo.carrera.facultad.id_facultad;

    this.servicio.ListarUsuarioPorFacultad(id_facultad)
    .subscribe(data =>{
      this.usuarios = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAsignaturasPorUsuario(id_usuario:number){
    this.servicio.ListarAsignaturasPorUsuario(id_usuario)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionUsuario(usuario:Usuario){
    this.servicio.asignaturas_subject_component[this.servicio.indice_lista].usuario = usuario;
  }

}
