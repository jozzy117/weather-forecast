import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForeCast(location: string): Observable<any> {
    const url = `https://api.weather.gov/gridpoints/${location}/31,80/forecast`;
    return this.http.get(url);
  }
}
