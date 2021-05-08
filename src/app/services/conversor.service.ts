import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private _http:HttpClient) { }

  convertir(transaccion:Transaccion):Observable<any>{
    const HttpOption={
      Headers: new HttpHeaders({
	      //"x-rapidapi-key": "516a12c760mshe8644877cab6d3cp1426e0jsnb7cda8cd04a2",
      	"x-rapidapi-host": "community-neutrino-currency-conversion.p.rapidapi.com",
      }),
      params:{

      }
    }
    let body ={
      "from-type":transaccion.desde,
      "to-type":transaccion.hasta,
      "from-value":transaccion.cantidad,
    }
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert?rapidapi-key=516a12c760mshe8644877cab6d3cp1426e0jsnb7cda8cd04a2",body,HttpOption);
  }
}
