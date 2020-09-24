import { IChequeo } from './i-chequeo';
import { Zapata } from './zapata';
export class CortanteUnidireccional implements IChequeo {

  zapata: Zapata;
  vuX: number;
  vuY: number;
  euX: number;
  euY: number;
  qMax: number;
  phiVc: number;

  constructor(zapatai: Zapata, qmax: number) {
    this.zapata = zapatai;
    this.qMax = qmax;
  }

  private calcVu(ladoZapata1: number, ladoZapata2: number, ladoColumna: number) {
    const a = this.zapata.espesorZapata - this.zapata.recubrimiento;
    const b = (ladoZapata1 / 2) - (ladoColumna / 2);
    const vu = this.qMax * ladoZapata2 * 1.4 * (b - a);
    return vu;
  }

  private calcPhiVc(fc: number): number {
    const phivc = 0.75 * 0.53 * Math.sqrt(fc) * 10;
    return phivc;
  }

  private calcEsfuerzoCortante(lado: number, vu: number): number {
    const a = this.zapata.espesorZapata - this.zapata.recubrimiento;
    const esfVu = vu / (lado * a);
    return esfVu;
  }

  Ejecutar(): void {
    this.phiVc = this.calcPhiVc(this.zapata.fc);
    this.vuX = this.calcVu(this.zapata.ladoxZap, this.zapata.ladoyZap, this.zapata.lxCol);
    this.vuY = this.calcVu(this.zapata.ladoyZap, this.zapata.ladoxZap, this.zapata.lyCol);
    this.euX = this.calcEsfuerzoCortante(this.zapata.ladoyZap, this.vuX);
    this.euY = this.calcEsfuerzoCortante(this.zapata.ladoxZap, this.vuY);
  }

  mensajeChequeo(): string {
    const euMax = Math.max(this.euX, this.euY);

    if (euMax / 10 > this.phiVc) {
      return 'Esfuerzos cortante superan el esfuerzo maximo del concreto';
    }
    else {
      return 'Ok';
    }
  }
}
