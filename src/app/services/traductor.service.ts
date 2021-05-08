import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traduccion } from '../models/traduccion';

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http:HttpClient) { }

  traducir(traduccion:Traduccion):Observable<any>{
    const HttpOption={
      Headers: new HttpHeaders({
        //"x-rapidapi-key": "997650a969mshf49ebf229880c19p1fac8ejsnb055b56856da",
	      "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com"
      }),
      params:{

      }
    }
    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source="+traduccion.origen+"&target="+traduccion.destino+"&input="+traduccion.valor+"&rapidapi-key=5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88",HttpOption);
  }
}

