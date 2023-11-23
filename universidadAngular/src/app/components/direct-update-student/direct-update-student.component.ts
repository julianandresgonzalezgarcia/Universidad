import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { ServicioService } from 'src/app/services/servicio.service';
import { UpdateStudentComponent } from '../update-student/update-student.component';

@Component({
  selector: 'app-direct-update-student',
  templateUrl: './direct-update-student.component.html',
  styleUrls: ['./direct-update-student.component.css']
})
export class DirectUpdateStudentComponent implements OnInit {

  id:number;

  alumno = new Alumno();

  carga:boolean = false;

  busqueda:boolean = false;

  fromUpdate = new FormControl('', [Validators.required]);

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar, private modal:MatDialog) { }

  ngOnInit(): void {
  }

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje, 'Aceptar',{
      duration:3000
    });
  }

  AlumnoPorId(id_alumno:number){
    this.servicio.BuscarAlumnoPorId(id_alumno)
    .subscribe(data =>{
      this.alumno = data;
      this.carga = true;
      this.busqueda = false;
    },(error)=>{
      this.Mensaje(error);
      this.carga = false;
      this.busqueda = true;
    });
  }

  PanelActualizarAlumno(id_alumno:number){
    if(this.fromUpdate.invalid){
      this.Mensaje('Por favor digite un id');
    }
    else if(this.busqueda){
      this.Mensaje('Usuario no encontrado, verifique el ID');
    }
    else{
      localStorage.setItem("id_alumno",id_alumno.toString());
      this.modal.open(UpdateStudentComponent);
    } 
  }

}
