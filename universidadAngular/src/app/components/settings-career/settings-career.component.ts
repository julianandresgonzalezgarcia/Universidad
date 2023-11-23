import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrera } from 'src/app/Models/carrera';
import { ServicioService } from 'src/app/services/servicio.service';
import { ListCareerSelectionComponent } from '../list-career-selection/list-career-selection.component';

@Component({
  selector: 'app-settings-career',
  templateUrl: './settings-career.component.html',
  styleUrls: ['./settings-career.component.css']
})
export class SettingsCareerComponent implements OnInit {

  carga_lista:boolean = false;

  formCarreraNombre:FormControl[] = [];

  formCarreraDuracion:FormControl[] = [];

  habilitar_edicion:boolean[] = [];

  //carreras:Carrera[] = [];

  displayedColumns: string[] = ['id_carrera', 'nombre', 'duracion', 'facultad', 'acciones'];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {
    this.ListarCarrerasSeleccion();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  CrearFormControl(cantidad:number){

    this.habilitar_edicion = [];

    this.formCarreraNombre = [];

    this.formCarreraDuracion = [];

    for(var i = 0; i < cantidad; i++){
      this.ConfirmarEdicion(this.servicio.carreras_career_component[i].id_carrera);
      this.formCarreraNombre.push(new FormControl('', [Validators.required]));
      this.formCarreraDuracion.push(new FormControl('', [Validators.required, Validators.minLength(1)]));
    }

    this.carga_lista = true;

  }

  ListarCarreras(){
    this.servicio.ListarCarrera()
    .subscribe(data =>{
      this.servicio.carreras_career_component = data;
      this.CrearFormControl(data.length);
    },(error)=>{
      this.Mensaje(error);
    })
  }

  ListarCarrerasPorFacultad(){

    var id_facultad = new Number(localStorage.getItem("id_facultad"))

    this.servicio.ListarCarrerasPorFacultad(+id_facultad)
    .subscribe(data =>{
      this.servicio.carreras_career_component = data;
      this.CrearFormControl(data.length);
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarCarrerasSeleccion(){

    if(localStorage.getItem("id_facultad") != null){
      this.ListarCarrerasPorFacultad();
    }
    else{
      this.ListarCarreras();
    }

  }

  ConfirmarEdicion(id_carrera:number){
    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data=>{

      if(data.length != 0){
        this.habilitar_edicion.push(true);
      }
      else{
        this.habilitar_edicion.push(false);
      }

    },(error)=>{
      this.Mensaje(error);
    });
  }

  ActualizarCarrera(index:number, id_carrera:number, carrera:Carrera){

    if(this.formCarreraNombre[index].invalid){
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if(this.formCarreraDuracion[index].invalid){
      
      if(this.formCarreraDuracion[index].value == null){
        this.Mensaje('Por favor llene el campo de duracion o semestres');
      }
      else{
        this.Mensaje('La duracion o los semestres deben ser un valor mayor a 1');
      }

    }
    else{
      
      this.servicio.ActualizarCarrear(id_carrera, carrera)
      .subscribe(data =>{
        this.Mensaje('Actualizado');
      },(error)=>{
        this.Mensaje(error);
      });

    }

  }

  BorrarCarrera(id_carrera:number){

    this.servicio.BorrarCarrera(id_carrera)
    .subscribe(data =>{
      this.ListarCarrerasSeleccion();
    },(error)=>{
      this.Mensaje(error);
    });

  }

  PanelSeleccionDeFacultad(index:number){
    this.servicio.indice_lista = index;
    this.modal.open(ListCareerSelectionComponent);
  }

}
