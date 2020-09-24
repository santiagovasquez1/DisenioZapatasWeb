import { DataService } from './services/data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZapataComponent } from './zapata/zapata.component';
import { ListaZapatasComponent } from './lista-zapatas/lista-zapatas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsfuerzoZapataComponent } from './esfuerzo-zapata/esfuerzo-zapata.component';
import { CortanteUnidireccionalComponent } from './cortante-unidireccional/cortante-unidireccional.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ZapataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ZapataComponent,
    ListaZapatasComponent,
    EsfuerzoZapataComponent,
    CortanteUnidireccionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
