import { Ciclo } from "./ciclo";
import { Usuario } from "./usuario";

export class Asignatura{

    id_asignatura:number;
    nombre:String;
    creditos:number;
    ciclo:Ciclo;
    usuario:Usuario;

    constructor(){}

}