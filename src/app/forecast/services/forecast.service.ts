import { Forecast } from '../models/forecast.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { catchError } from 'rxjs/operators';


@Injectable()
export class ForecastService {
  constructor(private http: HttpClient) {}

  search(payload: string): Observable<Forecast> {
        return this.http.get<Forecast>
          ('http://api.openweathermap.org/data/2.5/forecast?q='
           + payload + '&mode=json&appid=9ebf95fd99d30949d09a3a9b3a7b4d6d&units=metric');
    }

  }
