package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Carrera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarreraRepository extends JpaRepository<Carrera, Integer> {

    @Query(value = "SELECT * FROM carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " WHERE facultad.id_facultad = ?1", nativeQuery = true)
    List<Carrera> ListarCarrerasPorFacultad(int id);
}
