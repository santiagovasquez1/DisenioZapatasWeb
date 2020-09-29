import { eTipoCalculo } from './e-tipoCalculo';
import { CortanteUnidireccional } from './../Model/cortante-unidireccional';
import { EsfuerzoZapata } from './../Model/esfuerzo-zapata';
import { Zapata } from './../Model/zapata';
import { Injectable } from '@angular/core';
import { CortanteBidireccional } from '../Model/cortante-bidireccional';
import { BehaviorSubject, Subject } from 'rxjs';
import { IChequeo } from '../Model/i-chequeo';
import { FlexionZapata } from '../Model/flexion-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  zapata: Zapata = null;
  phiFlexionZapata: number;
  phiCortanteZapata: number;
  esfuerzoZapata: EsfuerzoZapata = null;
  cortanteUnidireccional: CortanteUnidireccional = null;
  cortanteBidireccional: CortanteBidireccional = null;
  flexionZapata: FlexionZapata = null;
  current: Subject<IChequeo> = new BehaviorSubject<IChequeo>(null);

  constructor() { }

  public ejecutarCalculo(z: Zapata, caso: eTipoCalculo, phi: number) {

    switch (caso) {
      case eTipoCalculo.Esfuerzo: {
        this.esfuerzoZapata = new EsfuerzoZapata(z);
        this.esfuerzoZapata.Ejecutar();
        this.current.next(this.esfuerzoZapata);
        break;
      }
      case eTipoCalculo.Unidireccional: {
        this.cortanteUnidireccional = new CortanteUnidireccional(z, this.esfuerzoZapata.qMax, phi);
        this.cortanteUnidireccional.Ejecutar();
        this.current.next(this.cortanteUnidireccional);
        break;
      }
      case eTipoCalculo.Flexion: {
        this.flexionZapata = new FlexionZapata(z, this.esfuerzoZapata.qMax, phi);
        this.flexionZapata.Ejecutar();
        this.current.next(this.flexionZapata);
        break;
      }
      default: {
        this.cortanteBidireccional = new CortanteBidireccional(z, this.esfuerzoZapata.qMax, phi);
        this.cortanteBidireccional.Ejecutar();
        this.current.next(this.cortanteBidireccional);
        break;
      }
    }


  }

  subscribeOnChange(fn) {
    this.current.subscribe(fn);
  }

}
