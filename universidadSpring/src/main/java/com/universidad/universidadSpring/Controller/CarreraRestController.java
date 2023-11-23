package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Carrera;
import com.universidad.universidadSpring.Service.CarreraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrera")
@CrossOrigin(origins = "http://localhost:4200")
public class CarreraRestController {

    @Autowired
    private CarreraService carreraService;

    @PostMapping
    public ResponseEntity GuardarCarrera(@RequestBody Carrera carrera){

        try{
            return new ResponseEntity(carreraService.Crear(carrera), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarCarrera(){

        try {
            return new ResponseEntity(carreraService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarCarreraPorId(@PathVariable int id){

        try {
            return new ResponseEntity(carreraService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/facultad/{id}")
    public ResponseEntity ListarCarreraPorIdFacultad(@PathVariable int id){

        try {
            return new ResponseEntity(carreraService.ListarCarrerasFacultad(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarCarrera(@PathVariable int id, @RequestBody Carrera carrera){

        try {
            return new ResponseEntity(carreraService.Actualizar(id, carrera),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarCarrera(@PathVariable int id){

        try {
            carreraService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

}
