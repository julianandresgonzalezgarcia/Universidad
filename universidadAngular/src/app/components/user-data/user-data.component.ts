import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Facultad } from 'src/app/Models/facultad';
import { Usuario } from 'src/app/Models/usuario';
import { ServicioService } from 'src/app/services/servicio.service';
import { AvatarIconComponent } from '../avatar-icon/avatar-icon.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})

export class UserDataComponent implements OnInit {

  carga:boolean;
  vista:boolean = true;

  usuario = new Usuario();
  facultades:Facultad[] = [];

  formNombre = new FormControl('', [Validators.required]);
  formApellido = new FormControl('', [Validators.required]);
  formCorreo = new FormControl('', [Validators.required, Validators.email]);
  formClave = new FormControl('', [Validators.required]);
  formFacultad = new FormControl('', [Validators.required]);

  constructor(public servicio:ServicioService, private modal:MatDialog, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.BuscarPorId();

  }

  ListarFacultades(){
    this.servicio.ListarFacultad()
    .subscribe(data =>{
      this.facultades = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje,'Aceptar',{
      duration:3000
    })
  }

  BuscarPorId(){
    var id = new Number(localStorage.getItem("id_usuario"));
    this.servicio.UsuarioPorId(+id).subscribe(data =>{
      this.ListarFacultades();
      this.servicio.avatar = data.avatar;
      this.usuario = data;
      this.carga = true;
    },(error)=>{
      this.Mensaje(error);
    })
  }

  PaneAvatar(){
    this.modal.open(AvatarIconComponent);
  }

  Actualizar(id_usuario:number, usuario:Usuario){

    if(this.formNombre.invalid){
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if(this.formApellido.invalid){
      this.Mensaje('Por favor llene el campo de apeliido');
    }
    else if(this.formCorreo.invalid){
      this.Mensaje('Por favor llene el campo de correo');
    }
    else if(this.formClave.invalid){
      this.Mensaje('Por favor llene el campo de contraseña');
    }
    else if(this.formFacultad.invalid){
      this.Mensaje('Por favor llene el campo de facultad');
    }
    else{
      usuario.avatar = this.servicio.avatar;   
      this.servicio.ActualizarUsuario(id_usuario,usuario).subscribe(data =>{
        window.location.reload();
      },(error)=>{
        this.Mensaje(error);
      });
    }
  }

}
