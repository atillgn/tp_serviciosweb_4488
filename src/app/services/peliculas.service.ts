import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http:HttpClient) { }

  buscarPelicula(id:string):Observable<any>{
    const HttpOption={
      Headers: new HttpHeaders({
        //"x-rapidapi-key": "997650a969mshf49ebf229880c19p1fac8ejsnb055b56856da",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }),
      params:{

      }
    }
    return this._http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+id+"?rapidapi-key=5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88",HttpOption);
  }
}