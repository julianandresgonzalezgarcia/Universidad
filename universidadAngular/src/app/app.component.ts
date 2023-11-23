import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDataComponent } from './components/user-data/user-data.component';
import { ServicioService } from './services/servicio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './Models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'universidadAngular';

  carga:boolean;

  //icon = "/assets/Avatars/Avatar (10).png";

  usuario = new Usuario();

  correcto:boolean;

  constructor(public servicio:ServicioService, private router:Router, private modal:MatDialog, private mensaje:MatSnackBar){}

  ngOnInit(): void {
    this.correcto = new Boolean(localStorage.getItem("login")).valueOf();
    this.BuscarUsuarioPoId();
  }

  /*PaginaLogin(){
    this.router.navigate(['login']);
  }*/

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje,'Aceptar',{
      duration:3000
    })
  }

  BuscarUsuarioPoId(){
    
    if(this.correcto){
      var id = new Number(localStorage.getItem("id_usuario"));
      this.servicio.UsuarioPorId(+id).subscribe(data =>{
        this.usuario = data;
        this.carga = true;
      },(error)=>{
        this.Mensaje(error);
      });
    }

  }

  PaginaInicio(){
    this.router.navigate(['home']);
  }

  PaginaStudents(){
    this.router.navigate(['students']);
  }

  PaginaSubjects(){
    this.router.navigate(['subjects']);
  }


  PaginaNotes(){
    this.router.navigate(['notes']);
  }

  UserData(){
    this.modal.open(UserDataComponent);
  }

  CerrarSesion(){
    localStorage.removeItem("login");
    location.reload();
  }
  
}
