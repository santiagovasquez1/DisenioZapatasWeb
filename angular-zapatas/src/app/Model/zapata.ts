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


  constructor(sigmaAdmi: number, gammaConcreto: number) {
    this.PresionAdmisible = sigmaAdmi;
    this.GammaConcreto = gammaConcreto;
  }

}
