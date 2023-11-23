package com.universidad.universidadSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "carrera")
public class Carrera {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_carrera;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private int duracion;

    @ManyToOne
    @JoinColumn(name = "id_facultad", nullable = false)
    private Facultad facultad;

    public Carrera() {
    }

    public Carrera(int id_carrera) {
        this.id_carrera = id_carrera;
    }

    public Carrera(String nombre, int duracion, Facultad facultad) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.facultad = facultad;
    }

    public int getId_carrera() {
        return id_carrera;
    }

    public void setId_carrera(int id_carrera) {
        this.id_carrera = id_carrera;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public Facultad getFacultad() {
        return facultad;
    }

    public void setFacultad(Facultad facultad) {
        this.facultad = facultad;
    }
}
