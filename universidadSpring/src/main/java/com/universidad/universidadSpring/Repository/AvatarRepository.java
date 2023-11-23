package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Avatar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvatarRepository extends JpaRepository<Avatar, Integer> {

}
