package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Ciclo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CicloRepository extends JpaRepository<Ciclo, Integer> {

    @Query(value = "SELECT * FROM ciclo" +
            " INNER JOIN carrera" +
            " ON ciclo.id_carrera = carrera.Id_carrera" +
            " WHERE carrera.id_carrera = ?1",nativeQuery = true)
    List<Ciclo> ListarCicloPorCarrera(int id);

}
