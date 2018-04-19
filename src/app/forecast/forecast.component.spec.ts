import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

import { ForecastComponent } from './forecast.component';
import { Forecast } from './models/forecast.model';
import * as fromForecastReducers from './reducers';
import * as fromForecastActions from './actions';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { effects } from './effects';
import { ForecastService } from './services/forecast.service';


describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let store: Store<fromForecastReducers.ForecastsState>;
 
  let tableData = [
    { "name": "Ethelind", "address": "446 Lotheville Drive" },
    { "name": "Aron", "address": "31406 Lakeland Terrace" }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      providers: [ForecastService],
      imports: [
         RouterModule.forChild([
          { path: '', component: ForecastComponent },
         ]),
         HttpClientModule,
         CommonModule,
         FormsModule,
          StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
         StoreModule.forFeature('forecast', reducers),
         EffectsModule.forFeature(effects)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });


  it('should be created', async(() => {
    expect(component).toBeTruthy();
  }));
    
  it('store to be defined', async(() => {
    expect(store).toBeDefined();
  }));

