export class Estadistica {
    pais:string;
    casos_totales:number;
    muertes_totales:number;
    recuperados_totales:number;
    constructor(pa?:string, cat?:number, mut?:number, ret?:number){
        this.pais=pa;
        this.casos_totales=cat;
        this.muertes_totales=mut;
        this.recuperados_totales=ret;
    }
}
