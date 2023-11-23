import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-cycle-choice',
  templateUrl: './list-cycle-choice.component.html',
  styleUrls: ['./list-cycle-choice.component.css']
})
export class ListCycleChoiceComponent implements OnInit {

  asignaturas:Asignatura[] = [];

  displayedColumns: string[] = ['nombre', 'creditos', 'usuario'];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.AsignaturasPorCiclo();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AsignaturasPorCiclo(){

    var id_ciclo = this.servicio.ciclos_cycle_component[this.servicio.indice_lista].id_ciclo; 

    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

}
