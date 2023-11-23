import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Facultad } from 'src/app/Models/facultad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-career-selection',
  templateUrl: './list-career-selection.component.html',
  styleUrls: ['./list-career-selection.component.css']
})
export class ListCareerSelectionComponent implements OnInit {

  facultades:Facultad[] = [];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
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

  SeleccionFacultad(facultad:Facultad){
    this.servicio.carreras_career_component[this.servicio.indice_lista].facultad = facultad;
  }

}
