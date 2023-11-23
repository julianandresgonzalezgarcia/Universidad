import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asignatura } from 'src/app/Models/asignatura';
import { Carrera } from 'src/app/Models/carrera';
import { Ciclo } from 'src/app/Models/ciclo';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-create-cycle',
  templateUrl: './create-cycle.component.html',
  styleUrls: ['./create-cycle.component.css']
})
export class CreateCycleComponent implements OnInit {

  carreras:Carrera[] = [];

  ciclos:Ciclo[] = [];

  asignaturas:Asignatura[] = [];

  ciclo = new Ciclo();

  formNombre = new FormControl('', [Validators.required]);

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarCarreras();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  ListarCarreras(){
    this.servicio.ListarCarrera()
    .subscribe(data =>{
      this.carreras = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarCiclosPorSeleccionCarrera(id_carrera:number){
    
    this.ciclos = [];

    this.servicio.ListarCiclosPorCarrera(id_carrera)
    .subscribe(data =>{
      this.ciclos = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  ListarAsignaturasPorSeleccionCiclo(id_ciclo:number){
    this.servicio.ListarAsignaturasPorCiclo(id_ciclo)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });

  }

  GuardarCiclo(ciclo:Ciclo){

    console.log(ciclo);

    if(ciclo.carrera == null){
      this.Mensaje('Por favor seleccione una carrera');
    }
    else if(this.formNombre.invalid){
      this.Mensaje('Por favor digite el nombre del ciclo');
    }
    else{

      this.servicio.CrearCiclo(ciclo)
      .subscribe(data =>{
        this.Mensaje('Ciclo creado');
        this.ListarCiclosPorSeleccionCarrera(data.carrera.id_carrera);
      },(error)=>{
        this.Mensaje(error);
      });  

    }

  }


}
