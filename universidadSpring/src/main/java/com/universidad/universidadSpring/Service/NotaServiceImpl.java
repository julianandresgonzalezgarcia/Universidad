package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Alumno;
import com.universidad.universidadSpring.Entity.Asignatura;
import com.universidad.universidadSpring.Entity.Nota;
import com.universidad.universidadSpring.Repository.NotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class NotaServiceImpl implements NotaService{

    @Autowired
    private NotaRepository notaRepository;


    @Override
    public Nota Crear(Nota nota) {
        Nota nota1 = new Nota(nota.getNota(), LocalDate.now(), nota.getAlumno(), nota.getAsignatura());
        return notaRepository.save(nota1);
    }

    @Override
    public List<Nota> Listar() {
        return notaRepository.findAll();
    }

    @Override
    public Nota BuscarPorId(int id) {
        return notaRepository.findById(id).get();
    }

    @Override
    public List<Nota> BuscarPorNotaPorMaestro(int id) {
        return notaRepository.ListarNotasPorMaestro(id);
    }

    @Override
    public List<Nota> BuscarPorNotaPorAlumno(int id) {
        return notaRepository.ListarNotasPorAlumno(id);
    }

    @Override
    public List<Nota> BuscarPorNotaPorFacultad(int id_alumno, int id_facultad) {
        return notaRepository.ListarNotasPorAlumnoFacultad(id_alumno, id_facultad);
    }

    @Override
    public List<Nota> BuscarPorNotaPorCarrera(int id_alumno, int id_carrera) {
        return notaRepository.ListarNotasPorAlumnoCarrera(id_alumno, id_carrera);
    }

    @Override
    public List<Nota> BuscarPorNotaPorCiclo(int id_alumno, int id_ciclo) {
        return notaRepository.ListarNotasPorAlumnoCiclo(id_alumno, id_ciclo);
    }

    @Override
    public List<Nota> BuscarSoloNotaPorAsignatura(int id_asignatua) {
        return notaRepository.ListarNotasPorAsignatura(id_asignatua);
    }

    @Override
    public List<Nota> BuscarPorNotaPorAsignatura(int id_alumno, int id_asignatura) {
        return notaRepository.ListarNotasPorAlumnoAsignatura(id_alumno, id_asignatura);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestro(int id) {
        return notaRepository.ListarAlumnoPorNotasPorMaestro(id);
    }

    @Override
    public Nota BuscarPorAlumnoPorNotaPorMaestroFiltroIdAlumno(int id_usuario, int id_alumno) {
        return notaRepository.AlumnoPorNotasPorMaestroFiltroIdAlumno(id_usuario, id_alumno);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroIdTexto(int id_usuario, String texto) {
        return notaRepository.ListarAlumnoPorNotasPorMaestroFiltroTexto(id_usuario, texto);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroFacultad(int id_usuario, int id_facultad) {
        return notaRepository.ListarAlumnoPorNotasPorMaestroFiltroFacultad(id_usuario, id_facultad);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroCarrera(int id_usuario, int id_carrera) {
        return notaRepository.ListarAlumnoPorNotasPorMaestroFiltroCarrera(id_usuario, id_carrera);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroCiclo(int id_usuario, int id_ciclo) {
        return notaRepository.ListarAlumnoPorNotasPorMaestroFiltroCiclo(id_usuario, id_ciclo);
    }

    @Override
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroAsignatura(int id_usuario, int id_asignatura) {
        return notaRepository.ListarAlumnoPorNotasPorMaestroFiltroAsignatura(id_usuario, id_asignatura);
    }

    @Override
    public Nota Actualizar(int id, Nota newNota) {
        return notaRepository.findById(id)
                .map(Nota ->{
                        Nota.setNota(newNota.getNota());
                        Nota.setFecha(newNota.getFecha());
                        Nota.setAlumno(newNota.getAlumno());
                        Nota.setAsignatura(newNota.getAsignatura());
                        return notaRepository.save(Nota);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        notaRepository.deleteById(id);
    }
}
