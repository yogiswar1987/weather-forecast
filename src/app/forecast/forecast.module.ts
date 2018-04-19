import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { effects } from './effects';

import { ForecastComponent } from './forecast.component';
import { ForecastService } from './services/forecast.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ForecastComponent },
    ]),
    HttpClientModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('forecast', reducers),
    EffectsModule.forFeature(effects),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.

    EffectsModule.forFeature([ForecastEffects]),
     * */
  ],
  declarations: [
    ForecastComponent
  ],
  providers: [ForecastService],
})
export class ForecastModule {}
