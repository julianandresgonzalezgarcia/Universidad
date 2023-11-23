package com.universidad.universidadSpring.Service;

import com.universidad.universidadSpring.Entity.Avatar;
import com.universidad.universidadSpring.Repository.AvatarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvatarServiceImpl implements AvatarService{

    @Autowired
    private AvatarRepository avatarRepository;


    @Override
    public List<Avatar> Listar() {
        return avatarRepository.findAll();
    }

    @Override
    public Avatar Actualilzar(int id, Avatar newAvatar) {
        return avatarRepository.findById(id)
                .map(Avatar ->{
                        Avatar.setAvatar_ruta(newAvatar.getAvatar_ruta());
                        return avatarRepository.save(Avatar);
                    }
                ).get();
    }
}
