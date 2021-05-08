import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula:Pelicula;
  peliculas:Array<Pelicula>;
  constructor(private PeliculasService:PeliculasService) { 
    this.peliculas=new Array<Pelicula>();
    this.buscar("tt0848228");
    this.buscar("tt0478970");
    this.buscar("tt0800369");
    this.buscar("tt0371746");
    this.buscar("tt0458339");
    this.buscar("tt3498820");
  }

  ngOnInit(): void {
  }

  buscar(id:string){
    this.PeliculasService.buscarPelicula(id).subscribe(
      (result)=>{
        this.pelicula=new Pelicula();
        console.log(result);
        this.pelicula.titulo=result.title;
        this.pelicula.desc=result.plot;
        this.pelicula.img=result.poster;
        this.pelicula.largo=result.length;
        this.pelicula.trailer=result.trailer.link;
        this.peliculas.push(this.pelicula);
      },
      (error)=>{alert("Error en la petición");}
    )
  }
}
