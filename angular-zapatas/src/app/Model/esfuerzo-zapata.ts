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

  Ejecutar(): void {
    throw new Error('Method not implemented.');
  }
  mensajeChequeo(): string {
    throw new Error('Method not implemented.');
  }

  private calculoExcentricidad(m: number, fz: number): number {
    return m / fz;
  }
}
