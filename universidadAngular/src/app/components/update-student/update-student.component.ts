import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { Carrera } from 'src/app/Models/carrera';
import { Facultad } from 'src/app/Models/facultad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id = new Number(localStorage.getItem("id_alumno"));

  alumno = new Alumno();

  carga:boolean = false;

  facultades:Facultad[] = [];

  carreras:Carrera[] = [];

  carrera_vacia:any = null;

  fromUpdateStudent: FormControl[] = [new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required])];

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarFacultades();
    this.AlumnoPorId();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  AlumnoPorId(){
    this.servicio.BuscarAlumnoPorId(+this.id)
    .subscribe(data =>{
      this.alumno = data;
      this.SeleccionFacultad(data.carrera.facultad.id_facultad);
      this.carga = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }
  
  ListarFacultades(){
    this.servicio.ListarFacultad()
    .subscribe(data =>{
      this.facultades = data
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionFacultad(id_facultad:number){

    this.carreras = [];

    this.servicio.ListarCarrerasPorFacultad(id_facultad)
    .subscribe(data =>{
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  RenovarAlumno(id_alumno: number, alumno: Alumno) {
    if (this.fromUpdateStudent[0].invalid) {
      this.Mensaje("Por favor llene el campo de nombre");
    }
    else if (this.fromUpdateStudent[1].invalid) {
      this.Mensaje("Por favor llene el campo de apellido");
    }
    else if (this.fromUpdateStudent[2].invalid) {
      this.Mensaje("Por favor seleccione una facultad");
    }
    else if (this.fromUpdateStudent[3].invalid) {
      this.Mensaje("Por favor seleccione una carrera");
    }
    else {
      this.servicio.ActualizarAlumno(id_alumno, alumno)
        .subscribe(data => {
          location.reload();
        }, (error) => {
          this.Mensaje(error);
        });
    }
  }

}
