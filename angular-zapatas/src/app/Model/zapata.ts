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
  pesoZapata: number;
  fc: number;
  recubrimiento: number;
  tipoColumna: ETipoColumna;

  constructor(sigmaAdmi: number, gammaConcreto: number, fc: number, recubrimiento: number) {
    this.PresionAdmisible = sigmaAdmi;
    this.GammaConcreto = gammaConcreto;
    this.fc = fc;
    this.recubrimiento = recubrimiento;
  }

}
