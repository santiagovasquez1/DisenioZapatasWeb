import { ETipoColumna } from './e-tipo-columna.enum';
import { IChequeo } from './i-chequeo';
import { Zapata } from './zapata';

export class CortanteBidireccional implements IChequeo {
  zapata: Zapata;
  vu: number;
  phiVc1: number;
  phiVc2: number;
  phiVc3: number;
  phiVcDef: number;
  qMax: number;

  constructor(zapatai: Zapata) {
    this.zapata = zapatai;
  }

  private calculoPhiVc1(): number {
    const phivc = 1.1 * 0.75 * Math.sqrt(this.zapata.fc) * 10;
    return phivc;
  }

  private CalculoPhiVc2(): number {
    const beta = Math.max(this.zapata.lxCol, this.zapata.lyCol) / Math.min(this.zapata.lxCol, this.zapata.lyCol);
    const phivc = 10 * 0.75 * 0.53 * (1 + (2 / beta)) * Math.sqrt(this.zapata.fc);
    return phivc;
  }
  private calculoPhiVc3(): number {
    const d = this.zapata.espesorZapata - this.zapata.recubrimiento;
    const b0 = (2 * (this.zapata.lxCol + d) + 2 * (this.zapata.lyCol + d)) * 100;
    let asd = 0;
    switch (this.zapata.tipoColumna) {
      case ETipoColumna.Interna:
        asd = 40;
        break;
      case ETipoColumna.Borde:
        asd = 30;
        break;
      case ETipoColumna.Esquinera:
        asd = 20;
        break;
    }

    const phivc = 10 * 0.75 * 0.27 * (2 + (asd * d * 100 / b0)) * Math.sqrt(this.zapata.fc);
    return phivc;
  }

  private calculoVu(): number {
    const d = this.zapata.espesorZapata - this.zapata.recubrimiento;
    const A1 = this.zapata.ladoxZap * this.zapata.ladoyZap;
    const A2 = (this.zapata.lxCol + d) + (this.zapata.lyCol + d);
    const Ac = A1 - A2;
    const Vu = 1.4 * this.qMax * Ac;
    return Vu;
  }

  Ejecutar(): void {
    this.phiVc1 = this.calculoPhiVc1();
    this.phiVc2 = this.CalculoPhiVc2();
    this.phiVc3 = this.calculoPhiVc3();
    this.phiVcDef = Math.min(this.phiVc1, this.phiVc2, this.phiVc3);
    this.vu = this.calculoVu();
  }

  mensajeChequeo(): string {
    if (this.vu > this.phiVcDef) {
      return 'Cortante ultima mayor que PhiVc';
    }
    else {
      return 'Ok';
    }
  }
}
