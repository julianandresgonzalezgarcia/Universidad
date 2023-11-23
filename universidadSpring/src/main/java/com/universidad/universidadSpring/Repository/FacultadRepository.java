package com.universidad.universidadSpring.Repository;

import com.universidad.universidadSpring.Entity.Facultad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FacultadRepository extends JpaRepository<Facultad, Integer> {

}
