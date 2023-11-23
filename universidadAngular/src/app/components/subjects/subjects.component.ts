import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Carrera } from 'src/app/Models/carrera';
import { Ciclo } from 'src/app/Models/ciclo';
import { Facultad } from 'src/app/Models/facultad';
import { Usuario } from 'src/app/Models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';
import { UserDataComponent } from '../user-data/user-data.component';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { CreateCareerComponent } from '../create-career/create-career.component';
import { CreateCycleComponent } from '../create-cycle/create-cycle.component';
import { SettingsCareerComponent } from '../settings-career/settings-career.component';
import { SettingsCycleComponent } from '../settings-cycle/settings-cycle.component';
import { SettingsSubjectComponent } from '../settings-subject/settings-subject.component';
import { RegisterMeSubjectComponent } from '../register-me-subject/register-me-subject.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  usuario = new Usuario();

  carga_usuario:boolean = false;

  facultades:Facultad[] = [];

  carreras:Carrera[] = [];

  ciclos:Ciclo[] = [];

  asignaturas:Asignatura[] = [];

  facultad_activar:boolean = false;

  carrera_activar:boolean = false;

  ciclo_activar:boolean = false;

  asignatura_activar:boolean = false;


  constructor(public servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {

    localStorage.removeItem("id_facultad");

    localStorage.removeItem("id_carrera");

    localStorage.removeItem("id_ciclo");

    this.servicio.posicion = "Carreras - Ciclos - Asignaturas";
    this.BuscarUsuarioPorId();
    this.ListarFacultades();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  BuscarUsuarioPorId(){
    this.servicio.UsuarioPorId(+this.id)
    .subscribe(data =>{
      this.usuario = data;
      this.carga_usuario = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  PanelUsaerData(){
    this.modal.open(UserDataComponent);
  }

  ListarFacultades(){

    this.carreras = [];

    this.ciclos = [];

    this.servicio.ListarFacultad()
    .subscribe(data =>{
      this.facultades = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionFacultad(id_facultad:number){

    localStorage.removeItem("id_carrera");

    localStorage.removeItem("id_ciclo");

    localStorage.setItem("id_facultad",id_facultad.toString());

    this.ciclos = [];

    this.asignaturas = [];

    this.servicio.ListarCarrerasPorFacultad(id_facultad)
    .subscribe(data =>{
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  SeleccionCarrera(id_carrera:number){

    localStorage.removeItem("id_ciclo");

    localStorage.setItem("id_carrera",id_carrera.toString());

    this.asignaturas = [];

    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.ciclos = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  SeleccionCiclo(id_ciclo:number){

    localStorage.setItem("id_ciclo",id_ciclo.toString());

    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  PanelCrearAsignatura(){
    this.modal.open(CreateSubjectComponent);
  }

  PanelCrearCarrera(){
    this.modal.open(CreateCareerComponent);
  }

  PanelCrearCiclo(){
    this.modal.open(CreateCycleComponent);
  }

  PanelConfiguracionFacultad(){

    this.carrera_activar = false;

    this.ciclo_activar = false;

    this.asignatura_activar = false;

    this.facultad_activar = true;

  }

  PanelConfiguracionCarreras(filtro:boolean){

    this.facultad_activar = false;

    this.ciclo_activar = false;

    this.asignatura_activar = false;

    if(filtro){
      this.carrera_activar = true;
    }
    else{
      this.asignaturas = [];
      this.carreras = [];
      this.ciclos = [];

      localStorage.removeItem("id_carrera");
  
      localStorage.removeItem("id_ciclo");
      
      localStorage.removeItem("id_facultad");

      this.carrera_activar = true;
    }

  }

  PanelConfiguracionCiclos(filtro:boolean){

    this.facultad_activar = false;

    this.carrera_activar = false;

    this.asignatura_activar = false;

    if(filtro){
      this.ciclo_activar = true;
    }
    else{
      this.asignaturas = [];
      this.ciclos = [];
  
      localStorage.removeItem("id_ciclo");

      localStorage.removeItem("id_carrera");

      this.ciclo_activar = true;
    }

  }

  PanelConfiguracionAsignaturas(filtro:boolean){

    this.facultad_activar = false;

    this.carrera_activar = false;

    this.ciclo_activar = false;

    if(filtro){
      this.asignatura_activar = true;
    }
    else{
      this.carreras = [];
      this.ciclos = [];
      this.asignaturas = [];

      localStorage.removeItem("id_facultad");

      localStorage.removeItem("id_carrera");

      localStorage.removeItem("id_ciclo");

      this.asignatura_activar = true;
    }

  }

  PanelRegistrarmeAsignatura(){
    this.modal.open(RegisterMeSubjectComponent);
  }
}
