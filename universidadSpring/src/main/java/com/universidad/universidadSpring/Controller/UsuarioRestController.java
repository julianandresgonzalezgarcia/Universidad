package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Usuario;
import com.universidad.universidadSpring.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioRestController {

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping
    public ResponseEntity GuardarUsuario(@RequestBody Usuario usuario){

        try {
            return new ResponseEntity(usuarioService.Crear(usuario), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarUsuarios(){

        try {
            return new ResponseEntity(usuarioService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarUsuarioPoId(@PathVariable int id){

        try{
            return new ResponseEntity(usuarioService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{correo}/{clave}")
    public ResponseEntity Buscar(@PathVariable String correo, @PathVariable String clave){

        try {
            return new ResponseEntity(usuarioService.Login(correo, clave),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/facultad/{id_facultad}")
    public ResponseEntity ListarAlumnosPorFacultad(@PathVariable int id_facultad){

        try {
            return  new ResponseEntity(usuarioService.BuscarUsuariosPorFacultad(id_facultad),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarUsuario(@PathVariable int id, @RequestBody Usuario newUsuario){

        try {
            return new ResponseEntity(usuarioService.Actualizar(id, newUsuario),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarUsuario(@PathVariable int id){

        try {
            usuarioService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }
    }


}
