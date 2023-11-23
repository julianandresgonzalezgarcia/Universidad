package com.universidad.universidadSpring.Controller;

import com.universidad.universidadSpring.Entity.Nota;
import com.universidad.universidadSpring.Service.NotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/nota")
@CrossOrigin(origins = "http://localhost:4200")
public class NotaRestController {

    @Autowired
    private NotaService notaService;

    @PostMapping
    public ResponseEntity GuardarNota(@RequestBody Nota nota){

        try {
            return new ResponseEntity(notaService.Crear(nota), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping
    public ResponseEntity ListarNota(){

        try {
            return new ResponseEntity(notaService.Listar(),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity BuscarNotaPorId(@PathVariable int id){

        try {
            return new ResponseEntity(notaService.BuscarPorId(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/maestro/{id}")
    public ResponseEntity ListarNotasAlumnosPorMaestro(@PathVariable int id){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorMaestro(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/{id}")
    public ResponseEntity ListarNotasAlumnos(@PathVariable int id){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorAlumno(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/facultad/{id_alumno}/{id_facultad}")
    public ResponseEntity ListarNotasFacultades(@PathVariable int id_alumno, @PathVariable int id_facultad){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorFacultad(id_alumno, id_facultad),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/carrera/{id_alumno}/{id_carrera}")
    public ResponseEntity ListarNotasCarreras(@PathVariable int id_alumno, @PathVariable int id_carrera){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorCarrera(id_alumno, id_carrera),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/ciclo/{id_alumno}/{id_ciclo}")
    public ResponseEntity ListarNotasCiclos(@PathVariable int id_alumno, @PathVariable int id_ciclo){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorCiclo(id_alumno, id_ciclo),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/asignatura/{id_alumno}/{id_asignatura}")
    public ResponseEntity ListarNotasAsignatura(@PathVariable int id_alumno, @PathVariable int id_asignatura){

        try {
            return new ResponseEntity(notaService.BuscarPorNotaPorAsignatura(id_alumno, id_asignatura),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/asignatura/{id_asignatura}")
    public ResponseEntity ListarNotasPorAsignatura(@PathVariable int id_asignatura){

        try {
            return new ResponseEntity(notaService.BuscarSoloNotaPorAsignatura(id_asignatura),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/{id}")
    public ResponseEntity ListarAlumnosNotasAsignaturas(@PathVariable int id){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestro(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/alumno/{id_usuario}/{id_alumno}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroIdAlumno(@PathVariable int id_usuario, @PathVariable int id_alumno){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroIdAlumno(id_usuario, id_alumno),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/texto/{id_usuario}/{texto}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroTexto(@PathVariable int id_usuario, @PathVariable String texto){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroIdTexto(id_usuario, texto),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/facultad/{id_usuario}/{id_facultad}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroFacultad(@PathVariable int id_usuario, @PathVariable int id_facultad){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroFacultad(id_usuario, id_facultad),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/carrera/{id_usuario}/{id_carrera}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroCarrera(@PathVariable int id_usuario, @PathVariable int id_carrera){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroCarrera(id_usuario, id_carrera),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/ciclo/{id_usuario}/{id_ciclo}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroCiclo(@PathVariable int id_usuario, @PathVariable int id_ciclo){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroCiclo(id_usuario, id_ciclo),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @GetMapping("/alumno/maestro/filtro/asignatura/{id_usuario}/{id_asignatura}")
    public ResponseEntity ListarAlumnosNotasAsignaturasFiltroAsignatura(@PathVariable int id_usuario, @PathVariable int id_asignatura){

        try {
            return new ResponseEntity(notaService.BuscarPorAlumnoPorNotaPorMaestroFiltroAsignatura(id_usuario, id_asignatura),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }


    @PutMapping("/{id}")
    public ResponseEntity ActualizarNota(@PathVariable int id, @RequestBody Nota nota){

        try {
            return new ResponseEntity(notaService.Actualizar(id, nota),HttpStatus.ACCEPTED);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity BorrarNota(@PathVariable int id){

        try {
            notaService.Borrar(id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        catch (Exception e){
            return new ResponseEntity(e.getMessage(),HttpStatus.FORBIDDEN);
        }

    }


}
