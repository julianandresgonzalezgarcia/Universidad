import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Avatar } from 'src/app/Models/avatar';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-avatar-icon',
  templateUrl: './avatar-icon.component.html',
  styleUrls: ['./avatar-icon.component.css']
})
export class AvatarIconComponent implements OnInit {

  avatars:Avatar[] = [];

  constructor(private servicio:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.ListarAvatas();
  }

  Mensaje(mensaje:string){
    this.mensaje.open(mensaje, 'Aceptar',{
      duration:3000
    });
  }

  ListarAvatas(){
    this.servicio.ListarAvatar()
    .subscribe(data =>{
      this.avatars = data;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  SeleccionAvatar(seleccion:Avatar){
    this.servicio.avatar = seleccion;
  }

}
