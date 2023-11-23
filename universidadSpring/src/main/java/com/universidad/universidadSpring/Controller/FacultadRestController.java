package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Facultad;
import com.universidad.universidadSpring.Service.FacultadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/facultad")
@CrossOrigin(origins = "http://localhost:4200")
public class FacultadRestController {

    @Autowired
    private FacultadService facultadService;

    @PostMapping
    public ResponseEntity GuardarFacultad(@RequestBody Facultad facultad){

        try {
            return new ResponseEntity(facultadService.Crear(facultad), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarFacultad(){

        try {
            return new ResponseEntity(facultadService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActulizarFacultad(@PathVariable int id, @RequestBody Facultad facultad){

        try {
            return new ResponseEntity(facultadService.Actualizar(id, facultad),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarFacultad(@PathVariable int id){

        try {
           facultadService.Borrar(id);
           return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }
}
