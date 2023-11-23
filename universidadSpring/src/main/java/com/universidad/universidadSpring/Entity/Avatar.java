package com.universidad.universidadSpring.Entity;

import javax.persistence.*;

@Entity
@Table(name = "avatar")
public class Avatar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_avatar;

    @Column(nullable = false)
    private String avatar_ruta;

    public Avatar() {
    }

    public Avatar(int id_avatar) {
        this.id_avatar = id_avatar;
    }

    public Avatar(String avatar_ruta) {
        this.avatar_ruta = avatar_ruta;
    }

    public int getId_avatar() {
        return id_avatar;
    }

    public void setId_avatar(int id_avatar) {
        this.id_avatar = id_avatar;
    }

    public String getAvatar_ruta() {
        return avatar_ruta;
    }

    public void setAvatar_ruta(String avatar_ruta) {
        this.avatar_ruta = avatar_ruta;
    }
}
