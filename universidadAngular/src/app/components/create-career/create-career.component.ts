import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrera } from 'src/app/Models/carrera';
import { Facultad } from 'src/app/Models/facultad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-create-career',
  templateUrl: './create-career.component.html',
  styleUrls: ['./create-career.component.css']
})
export class CreateCareerComponent implements OnInit {

  facultades:Facultad[] = [];

  carrera = new Carrera();

  formCarrera:FormControl[] = [new FormControl('',[Validators.required]),
                               new FormControl('',[Validators.required, Validators.minLength(1)])]

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
      this.Mensaje(error);
    });
  }

  GuardarCarrera(carrera:Carrera){

    if(carrera.facultad == null){
      this.Mensaje("Por favor seleccione una facultad");
    }
    else if(this.formCarrera[0].invalid){
      this.Mensaje("Por favor digite el nombre de la carrera");
    }
    else if(this.formCarrera[1].invalid){

      if(this.formCarrera[1].value == null){
        this.Mensaje("Por favor digite la canitdad de semsestres de la carrera");
      }
      else{
        this.Mensaje("Los semestres deben ser un valor mayor a 1");
      }

    }

    else{

      this.servicio.CrearCarrear(carrera)
      .subscribe(data =>{
        this.Mensaje('Carrera Creada');
      },(error)=>{
        this.Mensaje(error);
      });      

    }

  }

}
