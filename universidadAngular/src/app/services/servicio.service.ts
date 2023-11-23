import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Alumno } from '../Models/alumno';
import { Asignatura } from '../Models/asignatura';
import { Carrera } from '../Models/carrera';
import { Ciclo } from '../Models/ciclo';
import { Facultad } from '../Models/facultad';
import { Nota } from '../Models/nota';
import { Usuario } from '../Models/usuario';
import { Avatar } from '../Models/avatar';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  avatar = new Avatar();

  nota = new Nota();

  posicion:string;

  indice_lista:number;

  carreras_career_component:Carrera[] = [];

  ciclos_cycle_component:Ciclo[] = [];  

  asignaturas_subject_component:Asignatura[] = [];

  private urlUsuario = "http://localhost:8080/api/usuario";
  private urlAvatar = "http://localhost:8080/api/avatar";
  private urlFacultad = "http://localhost:8080/api/facultad";
  private urlCarrera = "http://localhost:8080/api/carrera";
  private urlCiclo = "http://localhost:8080/api/ciclo";
  private urlAsignatura = "http://localhost:8080/api/asignatura";
  private urlAlumno = "http://localhost:8080/api/alumno";
  private urlNota = "http://localhost:8080/api/nota";

  constructor(private http:HttpClient) { }

  //----------------------Usuario----------------------

  ListarUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlUsuario)
    .pipe(catchError(error =>{
      return throwError("error al listar los docentes");
    }));
  }

  CrearUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.urlUsuario,usuario)
    .pipe(catchError(error =>{
      return throwError("El correo ya esta registrado");
    }));
  }

  UsuarioPorId(id_usuario:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.urlUsuario+"/"+id_usuario)
    .pipe(catchError(error =>{
      return throwError("Error al buscar al usuario");
    }));
  }

  LoginUsuario(correo:String, clave:String){
    return this.http.get<Usuario>(this.urlUsuario+"/"+correo+"/"+clave)
    .pipe(catchError(error => {
      return throwError("Error al encontrar el usuario");
    }));
  }

  ListarUsuarioPorFacultad(id_facultad:number):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlUsuario+"/facultad/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("Error al listar a los docentes");
    }));
  }

  ActualizarUsuario(id_usuario:number, usuario:Usuario){
    return this.http.put<Usuario>(this.urlUsuario+"/"+id_usuario, usuario)
    .pipe(catchError(error =>{
      return throwError("El correo ya esta registrado");
    }));
  }

  BorrarUsuario(id_usuario:number){
    return this.http.delete<Usuario>(this.urlUsuario+"/"+id_usuario)
    .pipe(catchError(error =>{
      return throwError("Error al borrar el usuario, intentelo de nuevo");
    }));
  }

  //----------------------Avatar----------------------

  ListarAvatar():Observable<Avatar[]>{
    return this.http.get<Avatar[]>(this.urlAvatar)
    .pipe(catchError (error =>{
      return throwError("Error al listar avatar");
    }));
  }

  ActualizarAvatar(id:number, avatar:Avatar){
    return this.http.put<Avatar>(this.urlAvatar+"/"+id, avatar)
    .pipe(catchError (error=>{
      return throwError("Error al actualizar el avatar");
    }));
  }


  //----------------------Facultad----------------------

  CrearFacultad(facultad:Facultad){
    return this.http.post<Facultad>(this.urlFacultad,facultad)
    .pipe(catchError(error =>{
      return throwError("Error al crear la facultad, intentelo de nuevo");
    }));
  }

  ListarFacultad():Observable<Facultad[]>{
    return this.http.get<Facultad[]>(this.urlFacultad)
    .pipe(catchError(error =>{
      return throwError("No se ha encontrado ninguna facultad");
    }));
  }

  ActualizarFacultad(id_facultad:number, facultad:Facultad){
    return this.http.put<Facultad>(this.urlFacultad+"/"+id_facultad,facultad)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar la facultad, intentelo de nuevo");
    }));
  }

  BorrarFacultad(id_facultad:number){
    return this.http.delete<Facultad>(this.urlFacultad+"/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("Error al borrar la facultad, intentelo de nuevo");
    }));
  }

  //----------------------Carrera----------------------

  CrearCarrear(carrera:Carrera){
    return this.http.post<Carrera>(this.urlCarrera,carrera)
    .pipe(catchError(error =>{
      return throwError("Error al crear la carrera, intentelo de nuevo");
    }));
  }

  ListarCarrera():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.urlCarrera)
    .pipe(catchError(error =>{
      return throwError("No se ha encontrado ninguan carrera");
    }));
  }
  
  BuscarCarreraPorId(id_carrera:number):Observable<Carrera>{
    return this.http.get<Carrera>(this.urlCarrera+"/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("Error al buscar la carrera, intentelo de nuevo");
    }));
  }

  ListarCarrerasPorFacultad(id_facultad:number):Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.urlCarrera+"/facultad/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("Error al buscar las carreras por esta facultad");
    }));
  }

  ActualizarCarrear(id_carrera:number, carrera:Carrera){
    return this.http.put<Carrera>(this.urlCarrera+"/"+id_carrera,carrera)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar la carrear, intentelo de nuevo");
    }));
  }

  BorrarCarrera(id_carrera:number){
    return this.http.delete<Carrera>(this.urlCarrera+"/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("Error al borrar la carrera, intentelo de nuevo");
    }));
  }

  //----------------------Ciclo----------------------

  CrearCiclo(ciclo:Ciclo){
    return this.http.post<Ciclo>(this.urlCiclo,ciclo)
    .pipe(catchError(error =>{
      return throwError("Error al crear el ciclo, intentelo de nuevo");
    }));
  }

  ListarCiclo():Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(this.urlCiclo)
    .pipe(catchError(error =>{
      return throwError("Error al listar los ciclos, intentelo de nuevo");
    }));
  }

  BuscarCicloPorId(id_ciclo:number):Observable<Ciclo>{
    return this.http.get<Ciclo>(this.urlCiclo+"/"+id_ciclo)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el ciclos, intentelo de nuevo");
    }));
  }

  ListarCiclosPorCarrera(id_carrera:number):Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(this.urlCiclo+"/carrera/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("Error al listar ciclos por la carrera");
    }));
  }

  ActualizarCiclo(id_ciclo:number, ciclo:Ciclo){
    return this.http.put<Ciclo>(this.urlCiclo+"/"+id_ciclo,ciclo)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar el ciclo, intentelo de nuevo");
    }));
  }

  BorrarCiclo(id_ciclo:number){
    return this.http.delete<Ciclo>(this.urlCiclo+"/"+id_ciclo)
    .pipe(catchError(error =>{
      return throwError("Error al borrar el ciclo");
    }));
  }

  //----------------------Asignatura----------------------

  CrearAsignatura(asignatura:Asignatura){
    return this.http.post<Asignatura>(this.urlAsignatura,asignatura)
    .pipe(catchError(error =>{
      return throwError("Error al crear la asignatura, intentelo de nuevo");
    }));
  }

  ListarAsignatura():Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.urlAsignatura)
    .pipe(catchError(error =>{
      return throwError("Error al listar las asignaturas, intentelo de nuevo");
    }));
  }

  BuscarAsignaturaPorId(id_asignatura:number):Observable<Asignatura>{
    return this.http.get<Asignatura>(this.urlAsignatura+"/"+id_asignatura)
    .pipe(catchError(error =>{
      return throwError("Error al buscar la asignatura, intentelo de nuevo");
    }));
  }

  ListarAsignaturasPorUsuario(id:number):Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.urlAsignatura+"/usuario/"+id)
    .pipe(catchError(error =>{
      return throwError("Error al buscar las asignaturas del usuario");
    }));
  }

  ListarAsignaturasPorCiclo(id_ciclo:number):Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(this.urlAsignatura+"/ciclo/"+id_ciclo)
    .pipe(catchError(error =>{
      return throwError("Error al listar asignaturas por el ciclo");
    }));
  }

  ActualizarAsignatura(id_asignatura:number, asignatura:Asignatura){
    return this.http.put<Asignatura>(this.urlAsignatura+"/"+id_asignatura,asignatura)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar la asignatura, intentelo de nuevo");
    }));
  }

  BorrarAsignatura(id_asignatura:number){
    return this.http.delete<Asignatura>(this.urlAsignatura+"/"+id_asignatura)
    .pipe(catchError(error =>{
      return throwError("Error al borra al asignatura, intentelo de nuevo");
    }));
  }

  //----------------------Alumno----------------------

  CrearAlumno(alumno:Alumno){
    return this.http.post<Alumno>(this.urlAlumno,alumno)
    .pipe(catchError(error =>{
      return throwError("Error al crear el alumno, intentelo de nuevo");
    }));
  }

  ListarAlumno():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlAlumno)
    .pipe(catchError(error =>{
      return throwError("Error al listar los alumnos, intentelo de nuevo");
    }));
  }

  BuscarAlumnoPorId(id_alumno:number):Observable<Alumno>{
    return this.http.get<Alumno>(this.urlAlumno+"/"+id_alumno)
    .pipe(catchError(error =>{
      return throwError("Alumno no encontrado, intentelo de nuevo");
    }));
  }

  ListarAlumnosPorFacultad(id_facultad:number):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlAlumno+"/facultad/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("Error al buscar a los alumnos por esta facultad");
    }));
  }

  ListarAlumnosPorCarrera(id_carrera:number):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlAlumno+"/carrera/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("Error al buscar a los alumnos por esta carrera");
    }));
  }

  ListarAlumnosPorTexto(texto:String):Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlAlumno+"/buscar/"+texto)
    .pipe(catchError(error =>{
      return throwError("Error al buscar el alumno por la palabra");
    }));
  }

  BuscarAlumnoPorCarreraPorIdAlumno(id_carrera:number, id_alumno:number):Observable<Alumno>{
    return this.http.get<Alumno>(this.urlAlumno+"/buscar/carrera/alumno/"+id_carrera+"/"+id_alumno)
    .pipe(catchError(error =>{
      return throwError("El estudiante parece no ah sido encontrado");
    }));
  }

  ActualizarAlumno(id_alumno:number, alumno:Alumno){
    return this.http.put<Alumno>(this.urlAlumno+"/"+id_alumno,alumno)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar el alumno, intentelo de nuevo");
    }));
  }

  BorrarAlumno(id_alumno:number){
    return this.http.delete<Alumno>(this.urlAlumno+"/"+id_alumno)
    .pipe(catchError(error =>{
      return throwError("Error al borrar el alumno, intentelo de nuevo")
    }));
  }

  //----------------------Nota----------------------

  CrearNota(nota:Nota){
    return this.http.post<Nota>(this.urlNota,nota)
    .pipe(catchError(error =>{
      return throwError("Error al crear la nota, intentelo de nuevo");
    }));
  }

  ListarNota():Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota)
    .pipe(catchError(error =>{
      return throwError("Error al listar las notas, intentelo de nuevo");
    }));
  }

  BuscarNotaPorId(id_nota:number):Observable<Nota>{
    return this.http.get<Nota>(this.urlNota+"/"+id_nota)
    .pipe(catchError(error =>{
      return throwError("Error al buscar la nota, intentelo de nuevo");
    }));
  }

  ListarNotasPorMaestro(id:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/maestro/"+id)
    .pipe(catchError(error =>{
      return throwError("El usuarion no tiene notas almacenadas");
    }));
  }

  ListarNotasPorAlumno(id_alumno:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/"+id_alumno)
    .pipe(catchError(error =>{
      return throwError("El estudiante parece no tener notas aun");
    }));
  }

  ListarNotasPorFacultad(id_alumno:number, id_facultad:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/facultad/"+id_alumno+"/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("No se encontraron notas en esta facultad");
    }));
  }

  ListarNotasPorCarrera(id_alumno:number, id_carrera:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/carrera/"+id_alumno+"/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("No se encontraron notas en esta carrera");
    }));
  }

  ListarNotasPorCiclo(id_alumno:number, id_ciclo:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/ciclo/"+id_alumno+"/"+id_ciclo)
    .pipe(catchError(error =>{
      return throwError("No se encontraron notas en este ciclo");
    }));
  }

  ListarSoloNotasPorAsignatura(id_asignatura:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/asignatura/"+id_asignatura)
    .pipe(catchError(error =>{
      return throwError("Error al lista notas en la asignatura");
    }));
  }

  ListarNotasPorAsignatura(id_alumno:number, id_asignatura:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/asignatura/"+id_alumno+"/"+id_asignatura)
    .pipe(catchError(error =>{
      return throwError("No se encontraron notas en esta asignatura");
    }));
  }

  ListarAlumnosPorNotasPorMaestro(id_usuario:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/"+id_usuario)
    .pipe(catchError(error =>{
      return throwError("No se encotraron estudiantes en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroIdAlumno(id_usuario:number,id_alumno:number):Observable<Nota>{
    return this.http.get<Nota>(this.urlNota+"/alumno/maestro/filtro/alumno/"+id_usuario+"/"+id_alumno)
    .pipe(catchError(error =>{
      return throwError("No se encontro al estudiante en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroTexto(id_usuario:number,texto:String):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/filtro/texto/"+id_usuario+"/"+texto)
    .pipe(catchError(error =>{
      return throwError("No se encontraron a los estudiantes en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroFacultad(id_usuario:number,id_facultad:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/filtro/facultad/"+id_usuario+"/"+id_facultad)
    .pipe(catchError(error =>{
      return throwError("No se encontraron a los estudiantes en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroCarrera(id_usuario:number,id_carrera:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/filtro/carrera/"+id_usuario+"/"+id_carrera)
    .pipe(catchError(error =>{
      return throwError("No se encontraron a los estudiantes en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroCiclo(id_usuario:number,id_ciclo:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/filtro/ciclo/"+id_usuario+"/"+id_ciclo)
    .pipe(catchError(error =>{
      return throwError("No se encontraron a los estudiantes en tu cuenta");
    }));
  }

  ListarAlumnosPorNotasPorMaestroFiltroAsignatura(id_usuario:number,id_asignatura:number):Observable<Nota[]>{
    return this.http.get<Nota[]>(this.urlNota+"/alumno/maestro/filtro/asignatura/"+id_usuario+"/"+id_asignatura)
    .pipe(catchError(error =>{
      return throwError("No se encontraron a los estudiantes en tu cuenta");
    }));
  }

  ActualizarNota(id_nota:number, nota:Nota){
    return this.http.put<Nota>(this.urlNota+"/"+id_nota,nota)
    .pipe(catchError(error =>{
      return throwError("Error al actualizar la nota, intentelo de nuevo");
    }));
  }

  BorrarNota(id_nota:number){
    return this.http.delete<Nota>(this.urlNota+"/"+id_nota)
    .pipe(catchError(error =>{
      return throwError("Error al borrar la nota, intentelo de nuevo");
    }));
  }


}
