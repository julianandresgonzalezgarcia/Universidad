package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Usuario;

import java.util.List;

public interface UsuarioService {

    public Usuario Crear(Usuario usuario);
    public List<Usuario> Listar();
    public Usuario BuscarPorId(int id);
    public Usuario Login(String correo, String clave);
    public List<Usuario> BuscarUsuariosPorFacultad(int id_facultad);
    public Usuario Actualizar(int id, Usuario newUsuario);
    public void Borrar(int id);

}
