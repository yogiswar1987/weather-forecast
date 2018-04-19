import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule { }
