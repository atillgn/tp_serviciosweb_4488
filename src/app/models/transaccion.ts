export class Transaccion {
    desde:string;
    hasta:string;
    cantidad:number;
    constructor(desde?:string, hasta?:string, cantidad?:number){
        this.desde=desde;
        this.hasta=hasta;
        this.cantidad=cantidad;
    }
}