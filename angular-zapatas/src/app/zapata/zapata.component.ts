import { CortanteBidireccional } from './../Model/cortante-bidireccional';
import { CortanteUnidireccional } from './../Model/cortante-unidireccional';
import { Zapata } from './../Model/zapata';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { IChequeo } from '../Model/i-chequeo';

@Component({
  selector: 'app-zapata',
  templateUrl: './zapata.component.html',
  styleUrls: ['./zapata.component.css']
})
export class ZapataComponent implements OnInit {

  zapata: Zapata;
  @HostBinding('attr.class') cssClass = 'col-md-8';
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.fg = fb.group({
      presionAdmisible: ['', Validators.required],
      gammaConcreto: ['', Validators.required],
      pServ: ['', Validators.required],
      mxServ: ['', Validators.required],
      myServ: ['', Validators.required],
      fcZap: ['', Validators.required],
      lxCol: ['', Validators.required],
      lyCol: ['', Validators.required],
      rZapata: ['', Validators.required],
      eZapata: ['', Validators.required],
      lxZap: ['', Validators.required],
      lyZap: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  chequeoZapata(presionAdmisible: number, gammaConcreto: number, pServ: number,
                mxServ: number, myServ: number, fcZap: number, lxCol: number, lyCol: number,
                rZapata: number, eZapata: number, lxZap: number, lyZap: number) {

    this.zapata = new Zapata(presionAdmisible, gammaConcreto,
      pServ, mxServ, myServ, fcZap, lxCol, lyCol,
      rZapata, eZapata, lxZap, lyZap);
    console.log('Se creo la zapata');

    const chequeoUni: IChequeo = new CortanteUnidireccional(this.zapata);
    chequeoUni.Ejecutar();
    chequeoUni.mensajeChequeo();
  }

  // zapataValidator(control: FormControl): { [s: string]: boolean } {

  //   if ()

  //     return null;
  // }

}
