package com.universidad.universidadSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "alumno")
public class Alumno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_alumno;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    @ManyToOne
    @JoinColumn(name = "id_carrera", nullable = false)
    private Carrera carrera;

    public Alumno() {
    }

    public Alumno(int id_alumno) {
        this.id_alumno = id_alumno;
    }

    public Alumno(String nombre, String apellido, Carrera carrera) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
    }

    public int getId_alumno() {
        return id_alumno;
    }

    public void setId_alumno(int id_alumno) {
        this.id_alumno = id_alumno;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Carrera getCarrera() {
        return carrera;
    }

    public void setCarrera(Carrera carrera) {
        this.carrera = carrera;
    }

}
