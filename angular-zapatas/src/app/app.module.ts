import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZapataComponent } from './zapata/zapata.component';
import { ListaZapatasComponent } from './lista-zapatas/lista-zapatas.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapataComponent,
    ListaZapatasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
