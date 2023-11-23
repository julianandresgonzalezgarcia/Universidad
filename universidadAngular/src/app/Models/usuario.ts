import { Avatar } from "./avatar";
import { Facultad } from "./facultad";


export class Usuario{
    
    id_usuario:number;
    nombre:String;
    apellido:String;
    correo:String;
    clave:String;
    facultad:Facultad;
    avatar:Avatar;

    constructor(){}
}