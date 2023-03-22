import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "cache-control": "no-cache",
    'Access-Control-Allow-Origin': 'http://localhost:4200/' // Cambia este valor al dominio de origen de tu aplicación
  })
};

const baseURL = environment.urlService; 

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  //Para realizar el logeo
  // main:string = 'https://connect.deezer.com/oauth/auth.php?app_id=590924&redirect_uri=https://github.com/IAlex68I/ReproductorMusical.git&perms=basic_access,email';
  
  constructor(
    public http: HttpClient
  ) { }

  headersJSON: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  searchMusic(value:string): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${baseURL}/search?q=${value}`, {
      observe: 'response',
      headers: this.headersJSON
    });
  }

  // searchMusic(value:string): Observable<HttpResponse<any>> {
  //   return this.http.get<any>(`https://cors-anywhere.herokuapp.com/${baseURL}/search?q=${value}`, httpOptions)
    // return this.http.get<any>(`${baseURL}/search?q=${value}`, httpOptions);
  // }
}
