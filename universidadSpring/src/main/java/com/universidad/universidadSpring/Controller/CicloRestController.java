package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Ciclo;
import com.universidad.universidadSpring.Service.CicloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ciclo")
@CrossOrigin(origins = "http://localhost:4200")
public class CicloRestController {

    @Autowired
    private CicloService cicloService;

    @PostMapping
    public ResponseEntity GuardarCiclo(@RequestBody Ciclo ciclo){

        try {
            return new ResponseEntity(cicloService.Crear(ciclo), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(), HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarCiclo(){

        try{
            return new ResponseEntity(cicloService.Listar(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarCicloPorId(@PathVariable int id){

        try {
            return new ResponseEntity(cicloService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/carrera/{id}")
    public ResponseEntity ListarCiclosDeCarrera(@PathVariable int id){

        try {
            return new ResponseEntity(cicloService.ListarPorCicloCarrera(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarCiclo(@PathVariable int id, @RequestBody Ciclo ciclo){

        try {
            return new ResponseEntity(cicloService.Actualizar(id, ciclo),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarCiclo(@PathVariable int id){

        try {
            cicloService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }


}
