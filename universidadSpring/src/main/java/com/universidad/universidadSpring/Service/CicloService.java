package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Ciclo;

import java.util.List;

public interface CicloService {

    public Ciclo Crear(Ciclo ciclo);
    public List<Ciclo> Listar();
    public Ciclo BuscarPorId(int id);
    public  List<Ciclo> ListarPorCicloCarrera(int id);
    public Ciclo Actualizar(int id, Ciclo newCiclo);
    public void Borrar(int id);
}
