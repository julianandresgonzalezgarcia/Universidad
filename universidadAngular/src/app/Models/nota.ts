import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Nota{

    id_nota:number;
    nota:number;
    fecha:Date;
    alumno:Alumno;
    asignatura:Asignatura;

    constructor(){}
}