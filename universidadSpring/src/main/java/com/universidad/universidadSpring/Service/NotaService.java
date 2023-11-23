package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Alumno;
import com.universidad.universidadSpring.Entity.Asignatura;
import com.universidad.universidadSpring.Entity.Nota;
import org.aspectj.weaver.ast.Not;

import java.util.List;

public interface NotaService {

    public Nota Crear(Nota nota);
    public List<Nota> Listar();
    public Nota BuscarPorId(int id);
    public List<Nota> BuscarPorNotaPorMaestro(int id);
    public List<Nota> BuscarPorNotaPorAlumno(int id);
    public List<Nota> BuscarPorNotaPorFacultad(int id_alumno, int id_facultad);
    public List<Nota> BuscarPorNotaPorCarrera(int id_alumno, int id_carrera);
    public List<Nota> BuscarPorNotaPorCiclo(int id_alumno, int id_ciclo);
    public  List<Nota> BuscarSoloNotaPorAsignatura(int id_asignatua);
    public List<Nota> BuscarPorNotaPorAsignatura(int id_alumno, int id_asignatura);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestro(int id);
    public Nota BuscarPorAlumnoPorNotaPorMaestroFiltroIdAlumno(int id_usuario, int id_alumno);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroIdTexto(int id_usuario, String texto);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroFacultad(int id_usuario, int id_facultad);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroCarrera(int id_usuario, int id_carrera);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroCiclo(int id_usuario, int id_ciclo);
    public List<Nota> BuscarPorAlumnoPorNotaPorMaestroFiltroAsignatura(int id_usuario, int id_asignatura);
    public Nota Actualizar(int id, Nota newNota);
    public void Borrar(int id);
}
