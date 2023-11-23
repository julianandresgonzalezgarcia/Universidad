package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotaRepository extends JpaRepository<Nota, Integer> {

    @Query(value = "SELECT * FROM nota"
            +" INNER JOIN asignatura"
            +" ON nota.id_asignatura = asignatura.id_asignatura"
            +" INNER JOIN alumno"
            +" ON nota.id_alumno = alumno.id_alumno"
            +" INNER JOIN usuario"
            +" ON asignatura.id_usuario = usuario.id_usuario"
            +" WHERE usuario.id_usuario = ?1",nativeQuery = true)
    List<Nota> ListarNotasPorMaestro(int id);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN ciclo" +
            " ON asignatura.id_ciclo = ciclo.id_ciclo" +
            " INNER JOIN carrera c" +
            " ON ciclo.id_carrera = c.id_carrera" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1",nativeQuery = true)
    List<Nota> ListarAlumnosPorMaestro(int id);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " WHERE alumno.id_alumno = ?1",nativeQuery = true)
    List<Nota> ListarNotasPorAlumno(int id);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " WHERE alumno.id_alumno = ?1" +
            " AND facultad.id_facultad = ?2", nativeQuery = true)
    List<Nota> ListarNotasPorAlumnoFacultad(int id_alumno, int id_facultad);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " WHERE alumno.id_alumno = ?1" +
            " AND carrera.id_carrera = ?2", nativeQuery = true)
    List<Nota> ListarNotasPorAlumnoCarrera(int id_alumno, int id_carrera);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN ciclo" +
            " ON asignatura.id_ciclo = ciclo.id_ciclo" +
            " WHERE alumno.id_alumno = ?1" +
            " AND ciclo.id_ciclo = ?2",nativeQuery = true)
    List<Nota> ListarNotasPorAlumnoCiclo(int id_alumno, int id_ciclo);

    @Query(value = "SELECT * FROM nota" +
            " WHERE nota.id_asignatura = ?1", nativeQuery = true)
    List<Nota> ListarNotasPorAsignatura(int id_asignatura);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " WHERE alumno.id_alumno = ?1" +
            " AND asignatura.id_asignatura = ?2",nativeQuery = true)
    List<Nota> ListarNotasPorAlumnoAsignatura(int id_alumno, int id_asignatura);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestro(int id);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND nota.id_alumno = ?2" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    Nota AlumnoPorNotasPorMaestroFiltroIdAlumno(int id_usuario, int id_alumno);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND alumno.nombre LIKE %?2%" +
            " OR alumno.apellido LIKE %?2%" +
            " OR asignatura.nombre LIKE %?2%" +
            " OR carrera.nombre LIKE %?2%" +
            " OR facultad.nombre LIKE %?2%" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestroFiltroTexto(int id_usuario, String texto);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND facultad.id_facultad = ?2" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestroFiltroFacultad(int id_usuario, int id_facultad);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND carrera.id_carrera = ?2" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestroFiltroCarrera(int id_usuario, int id_carrera);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN ciclo" +
            " ON asignatura.id_ciclo = ciclo.id_ciclo" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND ciclo.id_ciclo = ?2" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestroFiltroCiclo(int id_usuario, int id_ciclo);

    @Query(value = "SELECT * FROM nota" +
            " INNER JOIN asignatura" +
            " ON nota.id_asignatura = asignatura.id_asignatura" +
            " INNER JOIN alumno" +
            " ON nota.id_alumno = alumno.id_alumno" +
            " INNER JOIN carrera" +
            " ON alumno.id_carrera = carrera.id_carrera" +
            " INNER JOIN facultad" +
            " ON carrera.id_facultad = facultad.id_facultad" +
            " INNER JOIN usuario" +
            " ON asignatura.id_usuario = usuario.id_usuario" +
            " WHERE usuario.id_usuario = ?1" +
            " AND asignatura.id_asignatura = ?2" +
            " GROUP BY nota.id_alumno" +
            " ORDER BY nota.id_alumno ASC",nativeQuery = true)
    List<Nota> ListarAlumnoPorNotasPorMaestroFiltroAsignatura(int id_usuario, int id_asignatura);



}
