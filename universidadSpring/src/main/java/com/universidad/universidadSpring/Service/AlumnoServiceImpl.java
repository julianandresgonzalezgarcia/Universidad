package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Alumno;
import com.universidad.universidadSpring.Repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlumnoServiceImpl implements AlumnoService{

    @Autowired
    private AlumnoRepository alumnoRepository;

    @Override
    public Alumno Crear(Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    @Override
    public List<Alumno> Listar() {
        return alumnoRepository.findAll();
    }

    @Override
    public Alumno BuscarPorId(int id) {
        return alumnoRepository.findById(id).get();
    }

    @Override
    public List<Alumno> ListarPorAlumnoFacultad(int id) {
        return alumnoRepository.ListarAlumnoPorFacultad(id);
    }

    @Override
    public List<Alumno> ListarPorAlumnoCarrera(int id) {
        return alumnoRepository.ListarAlumnoPorCarrera(id);
    }

    @Override
    public Alumno BuscarPorAlumnoCarreraIdAlumno(int id_carrera, int id_alumno) {
        return alumnoRepository.AlumnoPorCarreraPorIdAlumno(id_carrera, id_alumno);
    }

    @Override
    public List<Alumno> ListarPorAlumnoTexto(String texto) {
        return alumnoRepository.ListarAlumnoPorTexto(texto);
    }

    @Override
    public Alumno Actualizar(int id, Alumno newAlumno) {
        return alumnoRepository.findById(id)
                .map(Alumno ->{
                        Alumno.setNombre(newAlumno.getNombre());
                        Alumno.setApellido(newAlumno.getApellido());
                        Alumno.setCarrera(newAlumno.getCarrera());
                        return alumnoRepository.save(Alumno);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        alumnoRepository.deleteById(id);
    }
}
