package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    /*@Query(value = "SELECT * FROM usuario WHERE usuario_nombre = %?1%",nativeQuery = true)
    Usuario BuscarPorCorreo(String nombre);*/

    Usuario findByCorreoAndClave(String correo, String clave);

    @Query(value = "SELECT * FROM usuario" +
            " INNER JOIN facultad" +
            " ON usuario.id_facultad = facultad.id_facultad" +
            " WHERE facultad.id_facultad = ?1",nativeQuery = true)
    List<Usuario> ListarUsuarioPorFacultad(int id_facultad);

}
