package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Integer> {

    @Query(value = "SELECT * FROM alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " WHERE alumno.nombre LIKE %?1%" +
            " OR alumno.apellido LIKE %?1%" +
            " OR carrera.nombre LIKE %?1%" +
            " OR facultad.nombre LIKE %?1%" +
            " OR facultad.ubicacion LIKE %?1%",nativeQuery = true)
    List<Alumno> ListarAlumnoPorTexto(String texto);


    @Query(value = "SELECT * FROM alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " WHERE facultad.id_facultad = ?1",nativeQuery = true)
    List<Alumno> ListarAlumnoPorFacultad(int id);

    @Query(value = "SELECT * FROM alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " WHERE carrera.id_carrera = ?1",nativeQuery = true)
    List<Alumno> ListarAlumnoPorCarrera(int id);

    @Query(value = "SELECT * FROM alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " WHERE carrera.id_carrera = ?1" +
            " AND alumno.id_alumno = ?2",nativeQuery = true)
    Alumno AlumnoPorCarreraPorIdAlumno(int id_carrera, int id_alumno);

}
