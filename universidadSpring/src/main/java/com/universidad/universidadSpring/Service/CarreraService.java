package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Carrera;

import java.util.List;

public interface CarreraService {

    public Carrera Crear(Carrera carrera);
    public List<Carrera> Listar();
    public Carrera BuscarPorId(int id);
    public List<Carrera> ListarCarrerasFacultad(int id);
    public Carrera Actualizar(int id, Carrera newCarrera);
    public void Borrar(int id);
}
