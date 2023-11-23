package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Alumno;
import com.universidad.universidadSpring.Service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alumno")
@CrossOrigin(origins = "http://localhost:4200")
public class AlumnoRestController {

    @Autowired
    private AlumnoService alumnoService;

    @PostMapping
    private ResponseEntity GuardarAlumno(@RequestBody Alumno alumno){

        try {
            return new ResponseEntity(alumnoService.Crear(alumno), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    private ResponseEntity ListarAlumno(){

        try {
            return new ResponseEntity(alumnoService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarAlumnoPorId(@PathVariable int id){

        try {
            return new ResponseEntity(alumnoService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/facultad/{id}")
    public ResponseEntity ListarAlumnosDeFacultad(@PathVariable int id){

        try {
            return new ResponseEntity(alumnoService.ListarPorAlumnoFacultad(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/carrera/{id}")
    public ResponseEntity ListarAlumnosDeCarrera(@PathVariable int id){

        try {
            return new ResponseEntity(alumnoService.ListarPorAlumnoCarrera(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/buscar/{texto}")
    public ResponseEntity ListarAlumnosPorTexto(@PathVariable String texto){

        try {
            return new ResponseEntity(alumnoService.ListarPorAlumnoTexto(texto),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/buscar/carrera/alumno/{id_carrera}/{id_alumno}")
    public ResponseEntity BuscarAlumnoPorCarreraPorIdAlumno(@PathVariable int id_carrera, @PathVariable int id_alumno){

        try {
            return new ResponseEntity(alumnoService.BuscarPorAlumnoCarreraIdAlumno(id_carrera, id_alumno),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    private ResponseEntity ActualizarAlumno(@PathVariable int id, @RequestBody Alumno alumno){

        try {
            return new ResponseEntity(alumnoService.Actualizar(id, alumno),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarAlumno(@PathVariable int id){

        try {
            alumnoService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }



}
