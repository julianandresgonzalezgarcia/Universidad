import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Ciclo } from 'src/app/Models/ciclo';
import { Usuario } from 'src/app/Models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-subject-selection',
  templateUrl: './list-subject-selection.component.html',
  styleUrls: ['./list-subject-selection.component.css']
})
export class ListSubjectSelectionComponent implements OnInit {

  ciclos:Ciclo[] = [];

  asignaturas:Asignatura[] = [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarCiclos();
  }
  
  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarCiclos(){
    this.servicio.ListarCiclo()
    .subscribe(data =>{
      this.ciclos = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAsignaturasPorSeleccionCiclo(id_ciclo:number){
    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data  =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SelecionCiclo(ciclo:Ciclo){
    this.servicio.asignaturas_subject_component[this.servicio.indice_lista].ciclo = ciclo;
    this.servicio.asignaturas_subject_component[this.servicio.indice_lista].usuario = new Usuario();
  }
}
