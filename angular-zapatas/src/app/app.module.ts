import { ZapataComponent } from './Components/zapata/zapata.component';
import { DataService } from './services/data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CortanteBidireccionalComponent } from './Components/cortante-bidireccional/cortante-bidireccional.component';
import { CortanteUnidireccionalComponent } from './Components/cortante-unidireccional/cortante-unidireccional.component';
import { DespieceZapataComponent } from './Components/despiece-zapata/despiece-zapata.component';
import { EsfuerzoZapataComponent } from './Components/esfuerzo-zapata/esfuerzo-zapata.component';
import { FlexionZapataComponent } from './Components/flexion-zapata/flexion-zapata.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ListaZapatasComponent } from './Components/lista-zapatas/lista-zapatas.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { VistaZapataComponent } from './Components/vista-zapata/vista-zapata.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ZapataComponent },
  { path: 'flexion', component: FlexionZapataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ZapataComponent,
    ListaZapatasComponent,
    EsfuerzoZapataComponent,
    CortanteUnidireccionalComponent,
    NavBarComponent,
    FooterComponent,
    CortanteBidireccionalComponent,
    FlexionZapataComponent,
    VistaZapataComponent,
    DespieceZapataComponent,
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
