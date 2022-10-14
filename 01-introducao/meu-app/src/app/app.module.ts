import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuComponente2Component } from './meu-componente2/meu-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponente2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
