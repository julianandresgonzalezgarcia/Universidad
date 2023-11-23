import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrera } from 'src/app/Models/carrera';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-cycle-selection',
  templateUrl: './list-cycle-selection.component.html',
  styleUrls: ['./list-cycle-selection.component.css']
})
export class ListCycleSelectionComponent implements OnInit {

  carreras:Carrera[] = [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarCarreras();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarCarreras(){

    this.servicio.ListarCarrera()
    .subscribe(data =>{
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  SeleccionCarrera(carrera:Carrera){
    this.servicio.ciclos_cycle_component[this.servicio.indice_lista].carrera = carrera;
  }

}
