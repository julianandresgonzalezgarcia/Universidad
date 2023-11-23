package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Ciclo;
import com.universidad.universidadSpring.Repository.CicloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CicloServiceImpl implements CicloService{

    @Autowired
    private CicloRepository cicloRepository;

    @Override
    public Ciclo Crear(Ciclo ciclo) {
        return cicloRepository.save(ciclo);
    }

    @Override
    public List<Ciclo> Listar() {
        return cicloRepository.findAll();
    }

    @Override
    public Ciclo BuscarPorId(int id) {
        return cicloRepository.findById(id).get();
    }

    @Override
    public List<Ciclo> ListarPorCicloCarrera(int id) {
        return cicloRepository.ListarCicloPorCarrera(id);
    }

    @Override
    public Ciclo Actualizar(int id, Ciclo newCiclo) {
        return cicloRepository.findById(id)
                .map(Ciclo ->{
                        Ciclo.setNombre(newCiclo.getNombre());
                        Ciclo.setCarrera(newCiclo.getCarrera());
                        return cicloRepository.save(Ciclo);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        cicloRepository.deleteById(id);
    }
}
