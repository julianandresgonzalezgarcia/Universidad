import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nota } from 'src/app/Models/nota';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-confirm-delete-note',
  templateUrl: './confirm-delete-note.component.html',
  styleUrls: ['./confirm-delete-note.component.css']
})
export class ConfirmDeleteNoteComponent implements OnInit {

  id_nota = new Number(localStorage.getItem("id_nota"));

  nota = new Nota();

  carga:boolean = false;

  constructor(private service:ServicioService, private mensaje:MatSnackBar) { }

  ngOnInit(): void {
    this.NotaPorId();
  }

  Mensaje(mensaje: string) {
    this.mensaje.open(mensaje, 'Aceptar', {
      duration: 3000
    });
  }

  NotaPorId(){
    this.service.BuscarNotaPorId(+this.id_nota)
    .subscribe(data =>{
      this.nota = data;
      this.carga = true;
    },(error)=>{
      this.Mensaje(error);
    });
  }

  EliminarNota(){
    this.service.BorrarNota(+this.id_nota)
    .subscribe(data =>{
      location.reload();
    },(error)=>{
      this.Mensaje(error);
    });
  }

}
