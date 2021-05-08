import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private _http:HttpClient) { }

  buscar():Observable<any>{
    const HttpOption={
      Headers: new HttpHeaders({
        //"x-rapidapi-key": "5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88",
	      "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
      }),
      params:{

      }
    }
    return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1?rapidapi-key=5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88",HttpOption);
  }
}
