package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Facultad;

import java.util.List;

public interface FacultadService {

    public Facultad Crear(Facultad facultad);
    public List<Facultad> Listar();
    public Facultad Actualizar(int id, Facultad newFacultad);
    public void Borrar(int id);

}
