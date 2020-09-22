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

  constructor(presionAdmisible: number, gammaConcreto: number, pServ: number,
              mxServ: number, myServ: number, fcZap: number, lxCol: number,
              lyCol: number, rZapata: number, eZapata: number, lxZap: number, lyZap: number) {

    this.PresionAdmisible = presionAdmisible;
    this.GammaConcreto = gammaConcreto;
    this.P = pServ;
    this.mx = mxServ;
    this.my = myServ;
    this.fc = fcZap;
    this.lxCol = lxCol;
    this.lyCol = lyCol;
    this.recubrimiento = rZapata;
    this.espesorZapata = eZapata;
    this.ladoxZap = lxZap;
    this.ladoyZap = lyZap;
  }

}
