import { IChequeo } from './i-chequeo';
import { Zapata } from './zapata';
export class EsfuerzoZapata implements IChequeo {

  zapata: Zapata;
  exZapata: number;
  eyZapata: number;
  qMaxX: number;
  qMinX: number;
  qMaxY: number;
  qMiny: number;
  qMax: number;

  constructor(zapatai: Zapata) {

    this.zapata = zapatai;
  }

  Ejecutar(): void {

    const fExt = this.zapata.P + this.zapata.pesoZapata;
    this.exZapata = this.calculoExcentricidad(this.zapata.mx, fExt);
    this.eyZapata = this.calculoExcentricidad(this.zapata.my, fExt);
    this.qMaxX = this.calcQMax(this.exZapata, fExt, this.zapata.mx, this.zapata.ladoxZap, this.zapata.ladoyZap);
    this.qMinX = this.calcQmin(this.exZapata, fExt, this.zapata.mx, this.zapata.ladoxZap, this.zapata.ladoyZap);
    this.qMaxY = this.calcQMax(this.eyZapata, fExt, this.zapata.my, this.zapata.ladoyZap, this.zapata.ladoxZap);
    this.qMiny = this.calcQmin(this.eyZapata, fExt, this.zapata.my, this.zapata.ladoyZap, this.zapata.ladoxZap);
    this.qMax = Math.max(this.qMaxX, this.qMaxY, this.qMinX, this.qMiny);
  }
  mensajeChequeo(): string {
    throw new Error('Method not implemented.');
  }

  private calculoExcentricidad(m: number, fz: number): number {
    return m / fz;
  }

  private calcQMax(excentricidad: number, fz: number, mExt: number, lado1: number, lado2: number): number {

    const sigmaAxial = fz / this.zapata.areaReal;
    const sigmaFlexion = (6 * mExt) / (lado2 * Math.pow(lado1, 2));
    let qMax = 0;

    if (excentricidad < lado1 / 6) {
      qMax = sigmaAxial + sigmaFlexion;
    }
    else if (excentricidad < lado1 / 2 && excentricidad > lado1 / 6) {
      const b = lado2 - 2 * (mExt / fz);
      qMax = (4 * fz) / (3 * lado1 * b);
    }

    return qMax;
  }

  private calcQmin(excentricidad: number, fz: number, mExt: number, lado1: number, lado2: number): number {
    const sigmaAxial = fz / this.zapata.areaReal;
    const sigmaFlexion = (6 * mExt) / (lado2 * Math.pow(lado1, 2));
    let qMin = 0;

    if (excentricidad < lado1 / 6) {
      qMin = sigmaAxial - sigmaFlexion;
    }

    return qMin;
  }
}
