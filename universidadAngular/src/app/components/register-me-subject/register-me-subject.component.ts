import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Carrera } from 'src/app/Models/carrera';
import { Ciclo } from 'src/app/Models/ciclo';
import { Facultad } from 'src/app/Models/facultad';
import { Usuario } from 'src/app/Models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-register-me-subject',
  templateUrl: './register-me-subject.component.html',
  styleUrls: ['./register-me-subject.component.css']
})
export class RegisterMeSubjectComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  facultades:Facultad[] = [];

  carreras:Carrera[] = [];

  ciclos:Ciclo[] = [];

  asignaturas:Asignatura[] = [];

  docentes:Usuario[] = [];

  docente = new Usuario();

  carga_docente:boolean = false;

  asignatura = new Asignatura();

  seleccion_carrera:any;

  ciclo_vacio:any = null;

  nuevo_dato:boolean = false;

  formControlSubject: FormControl[] = [new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required, Validators.maxLength(1)]),
                                      new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required]),];

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarFacultades();
    this.BuscarUsuarioPorId();
    this.ListarUsuarios();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  BuscarUsuarioPorId(){
    this.servicio.UsuarioPorId(+this.id)
    .subscribe(data =>{
      this.docente = data;
      this.SeleccionFacultad(data.facultad.id_facultad);
      this.asignatura.usuario = data;
      this.carga_docente = true;
    },(error)=>{
      this.Mensaje(error);
    })
  }

  ListarFacultades(){

    this.carreras = [];

    this.ciclos = [];

    this.asignaturas = [];

    this.servicio.ListarFacultad()
    .subscribe(data =>{
      this.facultades = data;
    },(error)=>{
      this.Mensaje(error);
    });
    
  }

  SeleccionFacultad(id_facultad:number){

    this.carreras = [];

    this.ciclos = [];

    this.asignaturas = [];

    this.seleccion_carrera = null;

    this.asignatura.ciclo = this.ciclo_vacio;

    this.servicio.ListarCarrerasPorFacultad(id_facultad)
    .subscribe(data =>{
      this.carreras =data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionCarrera(id_carrera:number){

    this.ciclos = [];

    this.asignaturas = [];

    this.asignatura.ciclo = this.ciclo_vacio;

    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.ciclos = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionCiclo(id_ciclo:number){

    this.asignaturas = [];

    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarUsuarios(){
    this.servicio.ListarUsuario()
    .subscribe(data =>{
      this.docentes = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionUsuario(id_usuario:number){

    this.docente = new Usuario();

    this.servicio.UsuarioPorId(id_usuario)
    .subscribe(data =>{
      this.docente = data;
      this.carga_docente = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ConfirmarRecargaPagina(){
    if(this.nuevo_dato){
      location.reload();
    }
  }

  GuardarAsignatura(asignatura:Asignatura){

    if(this.formControlSubject[0].invalid){
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if(this.formControlSubject[1].invalid){

      if(this.formControlSubject[1].value == null){
        this.Mensaje('Por favor seleccione la cantidad de creditos');
      }
      else if(this.formControlSubject[1].value < 1 || this.formControlSubject[1].value > 5){
        this.Mensaje('Los creditos deben ser un valor de 1 a 5');
      }

    }
    else if(this.formControlSubject[3].invalid){
      this.Mensaje('Por favor seleccione un ciclo');
    }
    else{
       
      this.servicio.CrearAsignatura(asignatura)
      .subscribe(data =>{
        this.SeleccionCiclo(data.ciclo.id_ciclo);
        this.Mensaje('Asignatura creada');
        this.nuevo_dato = true;
      },(error)=>{
        this.Mensaje(error);
      });           

    }

  }

}
