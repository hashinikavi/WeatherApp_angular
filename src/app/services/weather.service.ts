import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
   }

   getWeatherData(cityName: String){
    this.http.get(environment.weatherApiBaseUrl,{headers: new HttpHeaders()
    .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
  })
  }
}
