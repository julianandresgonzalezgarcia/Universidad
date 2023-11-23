import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Facultad } from 'src/app/Models/facultad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-settings-faculty',
  templateUrl: './settings-faculty.component.html',
  styleUrls: ['./settings-faculty.component.css']
})
export class SettingsFacultyComponent implements OnInit {

  carga_lista:boolean = false;

  facultades:Facultad[] = [];

  displayedColumns: string[] = ['id_facultad', 'nombre', 'ubicacion'];

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

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
      this.carga_lista = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

}
