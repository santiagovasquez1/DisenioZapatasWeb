import { ETipoColumna } from './e-tipo-columna.enum';

export class Zapata {

  PresionAdmisible: number;
  GammaConcreto: number;
  P: number;
  mx: number;
  my: number;
  lxCol: number;
  lyCol: number;
  ladoxZap: number;
  ladoyZap: number;
  espesorZapata: number;
  areaNecesaria: number;
  areaReal: number;
  pesoZapata: number;
  fc: number;
  fy: number;
  recubrimiento: number;
  tipoColumna: ETipoColumna;

  constructor() {

  }

  setAreaNecesaria() {
    if (this.P > 0 && this.PresionAdmisible > 0) {
      this.areaNecesaria = this.P / this.PresionAdmisible;
    }
  }

  setPesoPropio() {
    if (this.espesorZapata > 0 && this.ladoxZap > 0 && this.ladoyZap > 0 && this.GammaConcreto > 0) {
      this.pesoZapata = this.espesorZapata * this.ladoxZap * this.ladoyZap * this.GammaConcreto;
    }
  }

  setAreaReal() {
    if (this.ladoyZap > 0 && this.ladoxZap > 0) {
      this.areaReal = this.ladoxZap * this.ladoyZap;
    }
  }
}
