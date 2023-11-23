package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Integer> {

    @Query(value = "SELECT * FROM asignatura"
            +" INNER JOIN usuario"
            +" ON asignatura.id_usuario = usuario.id_usuario"
            +" WHERE usuario.id_usuario = ?1",nativeQuery = true)
    List<Asignatura> AsignaturasUsuario(int id);

    @Query(value = "SELECT * FROM asignatura" +
            " INNER JOIN ciclo" +
            " ON asignatura.id_ciclo = ciclo.id_ciclo" +
            " WHERE ciclo.id_ciclo = ?1",nativeQuery = true)
    List<Asignatura> ListarAsignaturaPorCiclo(int id);
}
