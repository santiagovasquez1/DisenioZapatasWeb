import { IChequeo } from './i-chequeo';
import { Zapata } from './zapata';
export class FlexionZapata implements IChequeo {
    zapata: Zapata;
    muX: number;
    muY: number;
    asMinX: number;
    asMinY: number;
    asReqX: number;
    asReqY: number;
    qMax: number;
    phiFlexion: number;
    cuantiaMinX: number;
    cuantiaMinY: number;

    constructor(z: Zapata, qmax: number) {
        this.zapata = z;
        this.qMax = qmax;
    }

    private calcMu(ladoZapata1: number, ladoZapata2: number, ladoCol: number): number {
        const a = (this.qMax * ladoZapata1) / 2;
        const b = (ladoZapata2 - ladoCol) / 2;
        const mu = 1.4 * a * Math.pow(b, 2);
        return mu;
    }

    private calcAsmin(ladoZapata: number, cuantiaMin: number) {
        const asMin = cuantiaMin * ladoZapata * this.zapata.espesorZapata * 100 * 100;
        return asMin;
    }

    private calcAsReq(ladoZapata1: number, ladoZapata2: number, mu: number) {
        const d = (this.zapata.espesorZapata - this.zapata.recubrimiento) * 100;

    }

    Ejecutar(): void {
        this.muX = this.calcMu(this.zapata.ladoyZap, this.zapata.ladoxZap, this.zapata.lxCol);
        this.muY = this.calcMu(this.zapata.ladoxZap, this.zapata.ladoyZap, this.zapata.lyCol);
        this.asMinX = this.calcAsmin(this.zapata.ladoxZap, this.cuantiaMinX);
        this.asMinY = this.calcAsmin(this.zapata.ladoyZap, this.cuantiaMinY);
    }

    mensajeChequeo(): string {
        throw new Error('Method not implemented.');
    }

}