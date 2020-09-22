import { Zapata } from './Model/zapata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZapataComponent } from './zapata/zapata.component';
import { ListaZapatasComponent } from './lista-zapatas/lista-zapatas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsfuerzoZapataComponent } from './esfuerzo-zapata/esfuerzo-zapata.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapataComponent,
    ListaZapatasComponent,
    EsfuerzoZapataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Zapata],
  bootstrap: [AppComponent]
})
export class AppModule { }
