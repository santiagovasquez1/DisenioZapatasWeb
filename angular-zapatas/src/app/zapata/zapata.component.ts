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
  areaReal = 0;
  areaNecesario = 0;
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
      chequeoArea: ['', Validators.compose([
        this.zapataValidator(this.areaReal, this.areaNecesario)
      ])],

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

    this.zapata.setAreaNecesaria();
    this.zapata.setAreaReal();
    this.zapata.setPesoPropio();

    this.areaNecesario = this.zapata.areaNecesaria;
    this.areaReal = this.zapata.areaReal;
    console.log(this.zapata);

  }

  zapataValidator(areaReal: number, areaNecesaria: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      if (areaReal < areaNecesaria) {
        return { invalidArea: true };
      }
      return null;
    };
  }

  // zapataValidator(control: FormControl): { [s: string]: boolean } {

  //   if ()

  //     return null;
  // }

}
