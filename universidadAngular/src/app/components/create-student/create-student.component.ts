import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { Carrera } from 'src/app/Models/carrera';
import { Facultad } from 'src/app/Models/facultad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  facultades:Facultad[] = [];

  id_facultad:number;

  carreras:Carrera[] = [];

  alumno = new Alumno();

  carrera_vacia:any = null;

  fromCreateStudent: FormControl[] = [new FormControl('', [Validators.required]), 
                                      new FormControl('', [Validators.required]),
                                      new FormControl('', [Validators.required]), 
                                      new FormControl('', [Validators.required])];

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
    },(error)=>{
      this.Mensaje(error)
    });
  }

  SeleccionFacultad(id_facultad:number){

    this.carreras = [];

    this.alumno.carrera = this.carrera_vacia;

    this.servicio.ListarCarrerasPorFacultad(id_facultad)
    .subscribe(data =>{
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  GuardarAlumno(alumno: Alumno) {
    if (this.fromCreateStudent[0].invalid) {
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if (this.fromCreateStudent[1].invalid) {
      this.Mensaje('Por favor llene el campo de apellido');
    }
    else if (this.fromCreateStudent[2].invalid) {
      this.Mensaje('Por favor seleccione una facultad');
    }
    else if (this.fromCreateStudent[3].invalid) {
      this.Mensaje('Por favor seleccione una carrera');
    }
    else {
      this.servicio.CrearAlumno(alumno)
        .subscribe(data => {
          location.reload();
        }, (error) => {
          this.Mensaje(error);
        });
    }
  }


}
