package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Alumno;

import java.util.List;

public interface AlumnoService {

    public Alumno Crear(Alumno alumno);
    public List<Alumno> Listar();
    public Alumno BuscarPorId(int id);
    public List<Alumno> ListarPorAlumnoFacultad(int id);
    public List<Alumno> ListarPorAlumnoCarrera(int id);
    public Alumno BuscarPorAlumnoCarreraIdAlumno(int id_carrera, int id_alumno);
    public List<Alumno> ListarPorAlumnoTexto(String texto);
    public Alumno Actualizar(int id , Alumno newAlumno);
    public void Borrar(int id);
}
