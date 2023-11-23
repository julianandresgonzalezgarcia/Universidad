package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Avatar;
import com.universidad.universidadSpring.Service.AvatarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/avatar")
@CrossOrigin(origins = "http://localhost:4200")
public class AvatarRestController {

    @Autowired
    private AvatarService avatarService;


    @GetMapping
    public ResponseEntity LisarAvatar(){

        try {
            return new ResponseEntity(avatarService.Listar(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity ActualizarAvatar(@PathVariable int id, @RequestBody Avatar avatar){

        try {
            return new ResponseEntity(avatarService.Actualilzar(id, avatar),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

}
