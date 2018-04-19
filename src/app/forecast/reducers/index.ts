import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { reducer, ForecastState } from './forecast.reducer';
import * as fromForecast from './forecast.reducer';

export interface ForecastsState {
  forecast: ForecastState;
}

export const reducers: ActionReducerMap<ForecastsState> = {
  forecast: reducer,
};

export const getForecastsState = createFeatureSelector('forecast');
export const getForecastState = createSelector(getForecastsState, (state: ForecastsState) => state.forecast);

export const getForecast = createSelector(getForecastState, fromForecast.getForecast);
export const getForecastLoaded = createSelector(getForecastState, fromForecast.getForecastLoaded);
export const getForecastLoading = createSelector(getForecastState, fromForecast.getForecastLoading);
