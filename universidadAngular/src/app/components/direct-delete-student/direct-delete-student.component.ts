import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/Models/alumno';
import { ServicioService } from 'src/app/services/servicio.service';
import { ConfirmDeleteStudentComponent } from '../confirm-delete-student/confirm-delete-student.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-direct-delete-student',
  templateUrl: './direct-delete-student.component.html',
  styleUrls: ['./direct-delete-student.component.css']
})
export class DirectDeleteStudentComponent implements OnInit {

  id:number;

  alumno = new Alumno();

  carga:boolean = false;

  busqueda:boolean = false;

  fromDelete = new FormControl('', [Validators.required]);

  constructor(private servicio:ServicioService, private modal:MatDialog ,private mensaje:MatSnackBar) { }

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

  PanelConfirmarBorrado(id_alumno:number){
    if(this.fromDelete.invalid){
      this.Mensaje('Por favor digite un id');
    }
    else if(this.busqueda){
      this.Mensaje('Usuario no encontrado, verifique el ID');
    }
    else{
      localStorage.setItem("id_alumno",id_alumno.toString());
      this.modal.open(ConfirmDeleteStudentComponent);
    } 
  }

}
