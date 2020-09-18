import { Zapata } from './zapata';
export interface IChequeo {

  zapata: Zapata;
  Ejecutar(): void;
  mensajeChqueo(): string;
}
