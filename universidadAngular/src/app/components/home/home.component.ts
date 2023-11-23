import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';
import { Nota } from 'src/app/Models/nota';
import { Asignatura } from 'src/app/Models/asignatura';
import { Usuario } from 'src/app/Models/usuario';
import { UserDataComponent } from '../user-data/user-data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id = new Number(localStorage.getItem("id_usuario"));

  notas:Nota[] = [];

  asignaturas:Asignatura[] = [];

  usuario = new Usuario();

  confirmacion:boolean = false;

  constructor(private servicio:ServicioService, private modal:MatDialog, private router:Router, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.servicio.posicion = "Pagina principal"
    this.ListarNotas();
    this.ListarAsignaturasDelUsuario();
    this.BuscarUsuarioPorId();
  }

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje, 'Aceptar',{
      duration:3000
    });
  }

  ListarNotas(){
    //var id = new Number(localStorage.getItem("id_usuario"));
    this.servicio.ListarNotasPorMaestro(+this.id)
    .subscribe(data => {
      this.notas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  ListarAsignaturasDelUsuario(){
    this.servicio.ListarAsignaturasPorUsuario(+this.id)
    .subscribe(data =>{
      this.asignaturas = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  BuscarUsuarioPorId(){
    this.servicio.UsuarioPorId(+this.id)
    .subscribe(data =>{
      this.usuario = data;
      this.confirmacion = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  PanelUserData(){
    this.modal.open(UserDataComponent);
  }

  PaginaStudents(){
    this.router.navigate(['students']);
  }

  PaginaNotes(){
    this.router.navigate(['notes']);
  }

}
