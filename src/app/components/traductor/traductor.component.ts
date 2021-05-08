import { Component, OnInit } from '@angular/core';
import { Traduccion } from 'src/app/models/traduccion';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  traduccion:Traduccion;
  resultado:string="";
  constructor(private TraductorService:TraductorService) { 
    this.traduccion=new Traduccion("es","en","");
  }

  ngOnInit(): void {
  }

  asignardes(v:string){
    this.traduccion.destino=v;
  }
  asignaror(v:string){
    this.traduccion.origen=v;
  }

  traducir(){
    this.TraductorService.traducir(this.traduccion).subscribe(
      (result)=>{
        console.log(result)
        this.resultado=result['outputs'][0].output;
        console.log(this.resultado);
      },
      (error)=>{ alert("Error en la petición");}
    )
  }

  eliminar(){
    this.resultado="";
  }
}
