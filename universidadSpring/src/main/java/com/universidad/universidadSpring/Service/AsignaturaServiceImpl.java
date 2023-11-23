package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Asignatura;
import com.universidad.universidadSpring.Repository.AsignaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AsignaturaServiceImpl implements AsignaturaService{

    @Autowired
    private AsignaturaRepository asignaturaRepository;


    @Override
    public Asignatura Crear(Asignatura asignatura) {
        return asignaturaRepository.save(asignatura);
    }

    @Override
    public List<Asignatura> Listar() {
        return asignaturaRepository.findAll();
    }

    @Override
    public Asignatura BuscarPorId(int id) {
        return asignaturaRepository.findById(id).get();
    }

    @Override
    public List<Asignatura> ListarPorAsignaturaUsuario(int id) {
        return asignaturaRepository.AsignaturasUsuario(id);
    }

    @Override
    public List<Asignatura> ListarPorAsignaturaCiclo(int id) {
        return asignaturaRepository.ListarAsignaturaPorCiclo(id);
    }

    @Override
    public Asignatura Actualizar(int id, Asignatura newAsignatura) {
        return asignaturaRepository.findById(id)
                .map(Asignatura ->{
                        Asignatura.setNombre(newAsignatura.getNombre());
                        Asignatura.setCreditos(newAsignatura.getCreditos());
                        Asignatura.setCiclo(newAsignatura.getCiclo());
                        Asignatura.setUsuario(newAsignatura.getUsuario());
                        return asignaturaRepository.save(Asignatura);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        asignaturaRepository.deleteById(id);
    }
}
