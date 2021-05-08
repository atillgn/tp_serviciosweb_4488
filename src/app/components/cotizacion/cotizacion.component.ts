import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  subbmited:boolean=false;
  transaccion:Transaccion;
  resultado:string="";
  constructor(private ConversorService:ConversorService) {
    this.transaccion=new Transaccion("USD","EUR",);
  }
  ngOnInit(): void {
  }
  modificard(aux:string){
    this.transaccion.desde=aux;
  }
  modificarh(aux:string){
    this.transaccion.hasta=aux;
  }

  convertirValor(){
    this.ConversorService.convertir(this.transaccion).subscribe(
      (result)=>{
        console.log(result);
        this.resultado=result.result;
      },
      (error)=>{alert("Error en la petición");}
    );
  }
}
