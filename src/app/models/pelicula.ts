export class Pelicula {
    titulo:string;
    desc:string;
    img:string;
    largo:string;
    trailer:string;
    actores:Array<string>;
    constructor(titulo?:string, desc?:string,img?:string, largo?:string, trailer?:string, actores?:Array<string>){
        this.titulo=titulo;
        this.desc=desc;
        this.img=img;
        this.largo=largo;
        this.trailer=trailer;
        this.actores=actores;
    }
}
