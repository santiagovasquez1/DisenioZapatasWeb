import { Refuerzo } from './refuerzo';
import { FlexionZapata } from './flexion-model';
export class DespieceZapata {

  flexionZapata: FlexionZapata;
  asDefX: number;
  asDefY: number;
  sepX: number;
  sepY: number;
  refuerzoX: Refuerzo;
  refuerzoY: Refuerzo;
  gancho90X: boolean;
  gancho90Y: boolean;
  longRefuerzoX: number;
  longRefuerzoY: number;

  constructor(flexZapata: FlexionZapata) {
    this.flexionZapata = flexZapata;
  }

  public calcSep(refuerzo: Refuerzo, asi: number) {
    const separacion = 100 * (refuerzo.area / asi);
    return separacion;
  }

  public calcAsDef(refuerzo: Refuerzo, separacion: number) {
    const asi = refuerzo.area / (separacion / 100);
    return asi;
  }

}
