import { Zapata } from './../Model/zapata';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-zapatas',
  templateUrl: './lista-zapatas.component.html',
  styleUrls: ['./lista-zapatas.component.css']
})
export class ListaZapatasComponent implements OnInit {

  zapatas: Zapata[];

  constructor() {
    this.zapatas = [];
  }

  ngOnInit(): void {
  }

  guardar(presionAdmisible: number, gammaConcreto: number, pServ: number, mxServ: number, myServ: number): boolean {

    const zapata = new Zapata(presionAdmisible, gammaConcreto);

    zapata.P = pServ;
    zapata.mx = mxServ;
    zapata.my = myServ;

    this.zapatas.push(zapata);
    console.log(this.zapatas);
    return false;
  }
}
