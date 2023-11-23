package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Avatar;
import com.universidad.universidadSpring.Entity.Usuario;
import com.universidad.universidadSpring.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    private UsuarioRepository usuarioRepository;


    @Override
    public Usuario Crear(Usuario usuario) {
        Usuario usuario1 = new Usuario(usuario.getNombre(), usuario.getApellido(), usuario.getCorreo(), usuario.getClave(), usuario.getFacultad(), new Avatar(10));
        return usuarioRepository.save(usuario1);
    }

    @Override
    public List<Usuario> Listar() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario BuscarPorId(int id) {
        return usuarioRepository.findById(id).get();
    }

    @Override
    public Usuario Login(String correo, String clave) {
        return usuarioRepository.findByCorreoAndClave(correo, clave);
    }

    @Override
    public List<Usuario> BuscarUsuariosPorFacultad(int id_facultad) {
        return usuarioRepository.ListarUsuarioPorFacultad(id_facultad);
    }

    @Override
    public Usuario Actualizar(int id, Usuario newUsuario) {
        return usuarioRepository.findById(id)
                .map(Usuario ->{
                        Usuario.setNombre(newUsuario.getNombre());
                        Usuario.setApellido(newUsuario.getApellido());
                        Usuario.setCorreo(newUsuario.getCorreo());
                        Usuario.setClave(newUsuario.getClave());
                        Usuario.setFacultad(newUsuario.getFacultad());
                        Usuario.setAvatar(newUsuario.getAvatar());
                        return usuarioRepository.save(Usuario);
                    }
                ).get();
    }

    @Override
    public void Borrar(int id) {
        usuarioRepository.deleteById(id);
    }
}
