package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Asignatura;
import com.universidad.universidadSpring.Service.AsignaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/asignatura")
@CrossOrigin(origins = "http://localhost:4200")
public class AsignaturaRestController {

    @Autowired
    private AsignaturaService asignaturaService;

    @PostMapping
    public ResponseEntity GuardarAsignatura(@RequestBody Asignatura asignatura){

        try {
            return new ResponseEntity(asignaturaService.Crear(asignatura), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarAsignatura(){

        try {
            return new ResponseEntity(asignaturaService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarAsignaturaPorId(@PathVariable int id){

        try {
            return new ResponseEntity(asignaturaService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/usuario/{id}")
    public ResponseEntity ListarAsignaturasDelUsuario(@PathVariable int id){

        try {
            return new ResponseEntity(asignaturaService.ListarPorAsignaturaUsuario(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/ciclo/{id}")
    public ResponseEntity ListarAsignaturasDelCiclo(@PathVariable int id){

        try {
            return new ResponseEntity(asignaturaService.ListarPorAsignaturaCiclo(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarAsignatura(@PathVariable int id, @RequestBody Asignatura asignatura){

        try {
            return new ResponseEntity(asignaturaService.Actualizar(id, asignatura),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarAsignatura(@PathVariable int id){

        try {
            asignaturaService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }



}
