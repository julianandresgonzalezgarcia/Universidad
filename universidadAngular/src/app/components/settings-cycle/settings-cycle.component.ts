import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ciclo } from 'src/app/Models/ciclo';
import { ServicioService } from 'src/app/services/servicio.service';
import { ListCycleChoiceComponent } from '../list-cycle-choice/list-cycle-choice.component';
import { ListCycleSelectionComponent } from '../list-cycle-selection/list-cycle-selection.component';

@Component({
  selector: 'app-settings-cycle',
  templateUrl: './settings-cycle.component.html',
  styleUrls: ['./settings-cycle.component.css']
})
export class SettingsCycleComponent implements OnInit {

  //ciclos:Ciclo[] = [];

  carga_lista:boolean = false;

  formCicloNombre:FormControl[] = [];

  habilitar_edicion:boolean[] = [];

  displayedColumns: string[] = ['id_ciclo', 'nombre', 'carrera', 'acciones'];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {
    this.ListarCiclosSeleccion();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  CrearFormControl(cantidad:number){

    this.formCicloNombre = []

    this.habilitar_edicion = [];

    for(var i = 0; i < cantidad; i++){
      this.ConfirmarEdicion(this.servicio.ciclos_cycle_component[i].id_ciclo);
      this.formCicloNombre.push(new FormControl('', [Validators.required]))
    }

    this.carga_lista = true;

  }

  ListarCiclos(){
    this.servicio.ListarCiclo()
    .subscribe(data =>{
      this.servicio.ciclos_cycle_component = data;
      this.CrearFormControl(data.length);
      //this.carga_lista = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarCiclosPorCarrera(){
    var id_carrera = new Number(localStorage.getItem("id_carrera"));
    this.servicio.ListarCiclosPorCarrera(+id_carrera)
    .subscribe(data =>{
      this.servicio.ciclos_cycle_component = data;
      this.CrearFormControl(data.length);
      //this.carga_lista = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarCiclosSeleccion(){

    if(localStorage.getItem("id_carrera") != null){
      this.ListarCiclosPorCarrera();
    }
    else{
      this.ListarCiclos();
    }

  }

  ConfirmarEdicion(id_ciclo:number){
    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{

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

  ActualizarCiclo(index:number, id_ciclo:number, ciclo:Ciclo){

    if(this.formCicloNombre[index].invalid){

      this.Mensaje('Por favor llene el campo de nombre');

    }
    else{

      this.servicio.ActualizarCiclo(id_ciclo, ciclo)
      .subscribe(data =>{
        this.Mensaje('Actualizado')
      },(error)=>{
        this.Mensaje(error);
      });

    }

  }

  BorrarCiclo(id_ciclo:number){

    this.servicio.BorrarCiclo(id_ciclo)
    .subscribe(data =>{
      this.ListarCiclosSeleccion();
    },(error)=>{
      this.Mensaje(error);
    });

  }

  PanelListaCicloEleccion(index:number){
    this.servicio.indice_lista = index;
    this.modal.open(ListCycleChoiceComponent);
  }

  PanelListaCicloSeleccion(index:number){
    this.servicio.indice_lista = index;
    this.modal.open(ListCycleSelectionComponent);
  }

}
