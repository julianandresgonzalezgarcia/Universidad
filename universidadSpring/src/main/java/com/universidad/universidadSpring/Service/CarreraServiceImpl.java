package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Carrera;
import com.universidad.universidadSpring.Repository.CarreraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarreraServiceImpl implements CarreraService{

    @Autowired
    private CarreraRepository carreraRepository;

    @Override
    public Carrera Crear(Carrera carrera) {
        return carreraRepository.save(carrera);
    }

    @Override
    public List<Carrera> Listar() {
        return carreraRepository.findAll();
    }

    @Override
    public Carrera BuscarPorId(int id) {
        return carreraRepository.findById(id).get();
    }

    @Override
    public List<Carrera> ListarCarrerasFacultad(int id) {
        return carreraRepository.ListarCarrerasPorFacultad(id);
    }

    @Override
    public Carrera Actualizar(int id, Carrera newCarrera) {
        return carreraRepository.findById(id)
                .map(Carrera ->{
                        Carrera.setNombre(newCarrera.getNombre());
                        Carrera.setDuracion(newCarrera.getDuracion());
                        Carrera.setFacultad(newCarrera.getFacultad());
                        return carreraRepository.save(Carrera);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        carreraRepository.deleteById(id);
    }
}
