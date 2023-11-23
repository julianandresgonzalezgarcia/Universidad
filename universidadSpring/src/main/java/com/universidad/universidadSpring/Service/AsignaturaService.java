package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Asignatura;

import java.util.List;

public interface AsignaturaService {

    public Asignatura Crear(Asignatura asignatura);
    public List<Asignatura> Listar();
    public Asignatura BuscarPorId(int id);
    public List<Asignatura> ListarPorAsignaturaUsuario(int id);
    public List<Asignatura> ListarPorAsignaturaCiclo(int id);
    public Asignatura Actualizar(int id, Asignatura newAsignatura);
    public void Borrar(int id);
}
