package com.universidad.universidadSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "ciclo")
public class Ciclo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ciclo;

    @Column(nullable = false)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "id_carrera",nullable = false)
    private Carrera carrera;

    public Ciclo() {
    }

    public Ciclo(int id_ciclo) {
        this.id_ciclo = id_ciclo;
    }

    public Ciclo(String nombre, Carrera carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    public int getId_ciclo() {
        return id_ciclo;
    }

    public void setId_ciclo(int id_ciclo) {
        this.id_ciclo = id_ciclo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Carrera getCarrera() {
        return carrera;
    }

    public void setCarrera(Carrera carrera) {
        this.carrera = carrera;
    }
}
