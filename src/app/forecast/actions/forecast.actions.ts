import { Action } from '@ngrx/store';
import { Forecast } from '../models/forecast.model';

export enum ForecastActionTypes {
  Search = '[Forecast] Search',
  SearchComplete = '[Forecast] Search Complete',
  SearchError = '[Forecast] Search Error',
  Load = '[Forecast] Load',
  Select = '[Forecast] Select',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Search implements Action {
  readonly type = ForecastActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = ForecastActionTypes.SearchComplete;

  constructor(public payload: Forecast) {}
}

export class SearchError implements Action {
  readonly type = ForecastActionTypes.SearchError;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = ForecastActionTypes.Load;

  constructor(public payload: Forecast) {}
}

export class Select implements Action {
  readonly type = ForecastActionTypes.Select;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ForecastActionAction =
  | Search
  | SearchComplete
  | SearchError
  | Load
  | Select;
