package com.universidad.universidadSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "asignatura")
public class Asignatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_asignatura;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private int creditos;

    @ManyToOne
    @JoinColumn(name = "id_ciclo",nullable = false)
    private Ciclo ciclo;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

    public Asignatura() {
    }

    public Asignatura(int id_asignatura) {
        this.id_asignatura = id_asignatura;
    }

    public Asignatura(String nombre, int creditos, Ciclo ciclo, Usuario usuario) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.ciclo = ciclo;
        this.usuario = usuario;
    }

    public int getId_asignatura() {
        return id_asignatura;
    }

    public void setId_asignatura(int id_asignatura) {
        this.id_asignatura = id_asignatura;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCreditos() {
        return creditos;
    }

    public void setCreditos(int creditos) {
        this.creditos = creditos;
    }

    public Ciclo getCiclo() {
        return ciclo;
    }

    public void setCiclo(Ciclo ciclo) {
        this.ciclo = ciclo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
