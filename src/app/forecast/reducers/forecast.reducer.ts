import { Forecast } from '../models/forecast.model';
import {ForecastActionAction, ForecastActionTypes} from '../actions/forecast.actions';

export interface ForecastState {
  data: Forecast[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ForecastState = {
   data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: ForecastActionAction
) {
  switch (action.type) {
    case ForecastActionTypes.Search: {
      return {
        ...state,
        loading: true
      };
    }
      case ForecastActionTypes.SearchComplete: {
      const data = [...state.data, action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
      case ForecastActionTypes.SearchError: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getForecast = (state: ForecastState) => state.data;
export const getForecastLoading = (state: ForecastState) => state.loading;
export const getForecastLoaded = (state: ForecastState) => state.loaded;
