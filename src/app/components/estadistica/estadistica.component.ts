import { Component, OnInit } from '@angular/core';
import { Estadistica } from 'src/app/models/estadistica';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {
  estadisticas:Array<Estadistica>;
  estadistica:Estadistica;
  tipo:string="x";
  ccon:boolean=false;
  ccur:boolean=false;
  cfa:boolean=false;
  tipor:string="x";
  cconr:boolean=false;
  ccurr:boolean=false;
  cfar:boolean=false;
  constructor(private EstadisticasService:EstadisticasService) { 
    this.cargarDatos();
  }

  ngOnInit(): void {
  }
  aux(){
    console.log(this.tipo);
  }
  change(a:string){
    if(a=="ccon"){
      if(!this.ccon)this.ccon=true;
      else this.ccon=false;
    }else if(a=="ccur"){
      if(!this.ccur)this.ccur=true;
      else this.ccur=false;
    }else{
      if(!this.cfa)this.cfa=true;
      else this.cfa=false;
    }
  }
  confirmar(){
    this.tipor=this.tipo;
    this.cconr=this.ccon;
    this.ccurr=this.ccur;
    this.cfar=this.cfa;
  }
  cargarDatos(){
    this.EstadisticasService.buscar().subscribe(
      (result)=>{
        console.log(result);
        this.estadisticas = new Array<Estadistica>(); 
        result.forEach(element => {
          this.estadistica=new Estadistica();
          //Object.assign(this.estadistica,element); 
          this.estadistica.pais=element.Country_text;
          this.estadistica.casos_totales=element['Total Cases_text'];
          this.estadistica.muertes_totales=element['Total Deaths_text'];
          this.estadistica.recuperados_totales=element['Total Recovered_text'];
          this.estadisticas.push(this.estadistica);
        });
        console.log(this.estadisticas);
      },
      (error)=>{ alert("Error en la petición"); } 
    )
  }
}
