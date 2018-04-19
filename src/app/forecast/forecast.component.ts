import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


import { Forecast } from './models/forecast.model';
import * as fromForecastReducers from './reducers';
import * as fromForecastActions from './actions';


@Component({
  selector: 'app-forecast-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './forecast.component.html',
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
   body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
}

.searchTerm {
  float: left;
  width: 100%;
  border: 3px solid #00B4CC;
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  position: absolute;
  right: -50px;
  width: 75px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
}
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
  `,
  ],
})
export class ForecastComponent implements OnInit {

   queryString = '';
  forecasts$: Observable<Forecast[]>;
  forecastsErrors$: Observable<any>;

  constructor(private store: Store<fromForecastReducers.ForecastsState>) {
   // this.books$ = store.pipe(select(fromForecast.ge));
  }

  ngOnInit() {
    this.forecasts$ = this.store.select<any>(fromForecastReducers.getForecast);

  }

  search() {
    this.store.dispatch(new fromForecastActions.Search(this.queryString));
 }
}
