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

  private calcVu(ladoZapata: number, ladoColumna: number) {
    const a = this.zapata.espesorZapata - this.zapata.recubrimiento;
    const vu = this.qMax * ladoZapata * 1.4 * ((ladoZapata / 2) - (ladoColumna / 2) - a);
    return vu;
  }

  private calcPhiVc(fc: number): number {
    const phivc = 0.75 * 0.53 * Math.sqrt(fc) * 10;
    return phivc;
  }

  private calcEsfuerzoCortante(lado: number, vu: number): number {
    const esfVu = vu / (lado * this.zapata.espesorZapata - this.zapata.recubrimiento);

    return esfVu;
  }

  Ejecutar(): void {
    this.phiVc = this.calcPhiVc(this.zapata.fc);
    this.vuX = this.calcVu(this.zapata.ladoxZap, this.zapata.lxCol);
    this.vuY = this.calcVu(this.zapata.ladoyZap, this.zapata.lyCol);
    this.euX = this.calcEsfuerzoCortante(this.zapata.ladoyZap, this.vuX);
    this.euY = this.calcEsfuerzoCortante(this.zapata.ladoxZap, this.vuY);
  }

  mensajeChqueo(): string {
    const euMax = Math.max(this.euX, this.euY);

    if (euMax / 10 > this.phiVc) {
      return 'Esfuerzos cortante superan el esfuerzo maximo del concreto';
    }
    else {
      return 'Ok';
    }
  }
}
