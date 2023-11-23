package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Facultad;
import com.universidad.universidadSpring.Repository.FacultadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultadServiceImpl implements FacultadService{

    @Autowired
    private FacultadRepository facultadRepository;

    @Override
    public Facultad Crear(Facultad facultad) {
        return facultadRepository.save(facultad);
    }

    @Override
    public List<Facultad> Listar() {
        return facultadRepository.findAll();
    }

    @Override
    public Facultad Actualizar(int id, Facultad newFacultad) {
        return facultadRepository.findById(id)
                .map(Facultad ->{
                        Facultad.setNombre(newFacultad.getNombre());
                        Facultad.setUbicacion(newFacultad.getUbicacion());
                        return facultadRepository.save(Facultad);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        facultadRepository.deleteById(id);
    }
}
