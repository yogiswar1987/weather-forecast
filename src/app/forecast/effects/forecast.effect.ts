import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import * as forecastActions from '../actions/forecast.actions';

import { map, switchMap, catchError } from 'rxjs/operators';

import { ForecastService } from '../services/forecast.service';

@Injectable()
export class ForecastEffects {
  constructor(private acctions$: Actions, private forecastService: ForecastService) {}
  @Effect()
  loadForecast$ = this.acctions$.ofType(forecastActions.ForecastActionTypes.Search)
  .pipe(map((action: forecastActions.Search) => action.payload),
    switchMap(city => {
    return this.forecastService.search(city).pipe(
      map(forecast => new forecastActions.SearchComplete(forecast)),
      catchError((err: any) => {
          console.log('err in effect forecast effects', err);
          return of(new forecastActions.SearchError(err));
        })
    );
  })
  );
}
