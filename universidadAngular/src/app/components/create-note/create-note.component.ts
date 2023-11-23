import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { Asignatura } from 'src/app/Models/asignatura';
import { Nota } from 'src/app/Models/nota';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  date = new FormControl(new Date());

  fecha = new Date().toLocaleDateString();

  asignaturas:Asignatura[] = [];

  asignatura_id_seleccion:number;

  alumnos:Alumno[] = [];

  idAlumno:number = 0;

  recarga:boolean = true;

  fromNota:FormControl[] = [new FormControl('', [Validators.required, Validators.maxLength(1)]),
                            new FormControl('', [Validators.required])];

  notasAlumno:Nota[] = []; 

  nota = new Nota();

  confirmado:boolean = false;

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarAsignaturasDelUsaurio();
    //this.BuscarUsuarioPorId();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarAsignaturasDelUsaurio(){
    this.servicio.ListarAsignaturasPorUsuario(+this.id)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAlumnosCarrera(id_carrera:number){ 

    this.idAlumno = 0;
    this.alumnos = [];
    this.notasAlumno = [];
    this.nota.alumno = new Alumno();

    this.servicio.ListarAlumnosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.alumnos = data;
      this.recarga = true

    },(error)=>{
      this.Mensaje(error);
    });
  }

  AlumnoPorCarreraPorIdAlumno(id_alumno:number){

    this.recarga = false;

    if(this.nota.asignatura == null && id_alumno != null){

      this.Mensaje('Por favor seleccione una asignatira');

    }
    else if(id_alumno == null){

        this.Mensaje('Por favor digite un Id');

    }
    else if(id_alumno < 0){

      this.Mensaje('El id tiene que ser mayor a 0');

    }
    else{
      this.alumnos = [];
      this.notasAlumno = [];
      this.nota.alumno = new Alumno();

      this.servicio.BuscarAlumnoPorCarreraPorIdAlumno(this.nota.asignatura.ciclo.carrera.id_carrera,id_alumno)
      .subscribe(data =>{
        
        if(data != null){
          this.alumnos[0] = data;
        }
        else{
          this.alumnos = [];
        }

      },(error)=>{
        this.Mensaje(error);
      });   
    }


  }
  
  NotasAlumno(id_alumno:number){
    this.servicio.ListarNotasPorAsignatura(id_alumno, this.asignatura_id_seleccion)
    .subscribe(data =>{
      this.notasAlumno = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  GuardarNota(nota:Nota){

    console.log(nota);

    if(nota.asignatura == null){
      this.Mensaje('Seleccione la Asignatura en la parte izquierda del panel');
    }    
    else if(nota.alumno.id_alumno == null){
      this.Mensaje('Seleccione un Estudiante en la parte central del panel');
    }
    else if(nota.nota == null){
      this.Mensaje('Por favor digite una nota');
    }
    else if(nota.nota > 5 || nota.nota < 0){
      this.Mensaje('La nota solo puede ser de 0 a 5');
    }
    else{
      this.servicio.CrearNota(nota)
      .subscribe(data =>{
        this.NotasAlumno(data.alumno.id_alumno);
        this.confirmado = true;      
      },(error)=>{
        this.Mensaje(error);
      });
    }  
    
  }

  ConfirmarGuardadoNota(){
    if(this.confirmado){
      location.reload();
    }
  }

}
