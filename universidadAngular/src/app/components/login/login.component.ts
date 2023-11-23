import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Facultad } from 'src/app/Models/facultad';

import { Usuario } from 'src/app/Models/usuario';

import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  facultades:Facultad[] = [];

  vista:boolean = true;
  username:String;
  pass:String;

  correoExistente:boolean = false;

  formNombre = new FormControl('', [Validators.required]);
  formApellido = new FormControl('', [Validators.required]);
  formCorreo = new FormControl('', [Validators.required, Validators.email]);
  formClave = new FormControl('', [Validators.required]);
  formFacultad = new FormControl('', [Validators.required]);

  formUsername = new FormControl('', [Validators.required, Validators.email]);
  fromPass = new FormControl('', [Validators.required]);

  constructor(private mensaje:MatSnackBar, private servicio:ServicioService, private router:Router) {}

  ngOnInit(): void {
    this.ListarFacultades();
  }

  ListarFacultades(){
    this.servicio.ListarFacultad()
    .subscribe(data => {
      this.facultades = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje, 'Aceptar',{
      duration:3000
    })
  }

  Guardar(usuario:Usuario){

    if(this.formNombre.invalid){
      this.Mensaje('Por favor llene el campo de nombre');
    }
    else if(this.formApellido.invalid){
      this.Mensaje('Por favor llene el campo de apellido');
    }
    else if(this.formCorreo.invalid){
      this.Mensaje('Por favor llene el campo de Correo');
    }
    else if(this.formClave.invalid){
      this.Mensaje('Por favor llene el campo de Contraseña');
    }
    else if(this.formFacultad.invalid){
      this.Mensaje('Por favor llene el campo de facultad');
    }
    else{
      this.servicio.CrearUsuario(usuario)
      .subscribe(data =>{
        //window.location.reload();
        this.correoExistente = false;
        this.Mensaje(String(usuario.nombre)+' Ha sido registrado con Exito');
      },(error)=>{
        this.correoExistente = true;
        this.Mensaje(error);
      })
    }

    console.log(this.correoExistente);
    
  }

  Login(correo:String, clave:String){

    if(this.formUsername.invalid){
      this.Mensaje('Por favor llene el campo de Correo');
    }
    else if(this.fromPass.invalid){
      this.Mensaje('Por favor llene el campo de Contraseña')
    }
    else{   
      this.servicio.LoginUsuario(correo,clave)
      .subscribe(data => {

        if(data != null){
          localStorage.setItem("id_usuario",data.id_usuario.toString());
          localStorage.setItem("login",true.valueOf().toString());
          location.reload();
          //this.router.navigate(['/']);
          //this.router.navigate(['home']);
        }
        else{
          this.Mensaje('Usuario no encontrado, Revise la contraseña o el correo');
        }

      },(error)=>{
        this.Mensaje(error);
      });
    }

  }

}
