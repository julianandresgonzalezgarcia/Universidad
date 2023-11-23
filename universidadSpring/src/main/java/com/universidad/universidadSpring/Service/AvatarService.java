package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Avatar;

import java.util.List;

public interface AvatarService {

    public List<Avatar> Listar();
    public Avatar Actualilzar(int id, Avatar newAvatar);

}
