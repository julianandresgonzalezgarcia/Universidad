import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { ServicioService } from 'src/app/services/servicio.service';
import { ListSubjectSelectionComponent } from '../list-subject-selection/list-subject-selection.component';
import { ListUserSelectionComponent } from '../list-user-selection/list-user-selection.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-subject',
  templateUrl: './settings-subject.component.html',
  styleUrls: ['./settings-subject.component.css']
})
export class SettingsSubjectComponent implements OnInit {

  //asignaturas:Asignatura[] = [];

  carga_lista:boolean = false;

  habilitar_edicion:boolean[] = [];

  formAsignaturasNombre:FormControl[] = [];

  formAsignaturasCreditos:FormControl[] = [];

  displayedColumns: string[] = ['id_asignatura', 'nombre', 'creditos', 'ciclo', 'usuario', 'acciones'];

  constructor(public servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {
    this.ListarAsignaturasSeleccion();
  }

  CrearFormControl(cantidad:number){

    this.habilitar_edicion = [];

    this.formAsignaturasNombre = [];

    this.formAsignaturasCreditos = [];

    for(var i = 0; i < cantidad; i++){
      this.ConfirmarEdicion(this.servicio.asignaturas_subject_component[i].id_asignatura);
      this.formAsignaturasNombre.push(new FormControl('', [Validators.required]));
      this.formAsignaturasCreditos.push(new FormControl('', [Validators.required, Validators.maxLength(1)]));
    }

    this.carga_lista = true;

  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarAsignaturas(){
    this.servicio.ListarAsignatura()
    .subscribe(data =>{
      this.servicio.asignaturas_subject_component = data;
      this.CrearFormControl(data.length);
      //this.carga_lista = true;
      //this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAsignaturasPorCiclo(){

    var id_cilo = new Number (localStorage.getItem("id_ciclo"));

    this.servicio.ListarAsignaturasPorCiclo(+id_cilo)
    .subscribe(data =>{
      this.servicio.asignaturas_subject_component = data;
      this.CrearFormControl(data.length);
      //this.carga_lista = true;      
      //this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAsignaturasSeleccion(){

    if(localStorage.getItem("id_ciclo") != null){
      this.ListarAsignaturasPorCiclo();      
    }
    else{
      this.ListarAsignaturas();
    }

  }

  ConfirmarEdicion(id_asignatura:number){
    this.servicio.ListarSoloNotasPorAsignatura(id_asignatura)
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

  PanelListaAsignaturaSeleccion(index:number){
    this.servicio.indice_lista = index;
    this.modal.open(ListSubjectSelectionComponent);
  }

  PanelListarDocenteSeleccion(index:number){
    this.servicio.indice_lista = index;
    this.modal.open(ListUserSelectionComponent);
  }

  ActualizarAsignatura(index:number, id_asignatura:number, asignatura:Asignatura){

    if(this.formAsignaturasNombre[index].invalid){
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if(this.formAsignaturasCreditos[index].invalid){

      if(this.formAsignaturasCreditos[index].value == null){
        this.Mensaje('Por favor digite la cantidad de cerditos');
      }
      else if(this.formAsignaturasCreditos[index].value < 1 || this.formAsignaturasCreditos[index].value > 5){
        this.Mensaje('Los creditos deben ser un valor de 1 a 5');
      }

    }
    else if(this.servicio.asignaturas_subject_component[index].ciclo.id_ciclo == null){
      this.Mensaje('Por favor seleccione un ciclo');
    }
    else if(this.servicio.asignaturas_subject_component[index].usuario.id_usuario == null){
      this.Mensaje('Por favor seleccione un docente');
    }
    else{

      this.servicio.ActualizarAsignatura(id_asignatura, asignatura)
      .subscribe(data =>{
        this.Mensaje('Actualizado');
      },(error)=>{
        this.Mensaje(error);
      });

    }

  }

  BorrarAsignatura(id_asignatura:number){

    this.servicio.BorrarAsignatura(id_asignatura)
    .subscribe(data =>{
      this.ListarAsignaturasSeleccion();
    },(error)=>{
      this.Mensaje(error);
    });

  }

}
