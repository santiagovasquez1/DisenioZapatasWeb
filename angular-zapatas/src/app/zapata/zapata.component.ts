import { DataService } from './../services/data-service.service';
import { CortanteBidireccional } from './../Model/cortante-bidireccional';
import { CortanteUnidireccional } from './../Model/cortante-unidireccional';
import { Zapata } from './../Model/zapata';
import { Component, HostBinding, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() areaReal = 0;
  @Input() areaNecesario = 0;
  @HostBinding('attr.class') cssClass = 'col-md-8';
  @Output() enviarZapata: EventEmitter<Zapata>;
  fg: FormGroup;

  constructor(fb: FormBuilder, private dataServie: DataService) {
    this.enviarZapata = new EventEmitter();
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

    this.zapata = new Zapata();

    this.zapata.PresionAdmisible = presionAdmisible;
    this.zapata.GammaConcreto = gammaConcreto;
    this.zapata.P = pServ;
    this.zapata.mx = mxServ;
    this.zapata.my = myServ;
    this.zapata.fc = fcZap;
    this.zapata.lxCol = lxCol;
    this.zapata.lyCol = lyCol;
    this.zapata.recubrimiento = rZapata;
    this.zapata.espesorZapata = eZapata;
    this.zapata.ladoxZap = lxZap;
    this.zapata.ladoyZap = lyZap;

    this.zapata.setAreaNecesaria();
    this.zapata.setAreaReal();
    this.zapata.setPesoPropio();

    this.areaNecesario = this.zapata.areaNecesaria;
    this.areaReal = this.zapata.areaReal;
    console.log(this.zapata);

    this.enviarZapata.emit(this.zapata);
    this.dataServie.zapataGobal = this.zapata;
    return false;
  }

  zapataValidator(areaReal: number, areaNecesaria: number): ValidatorFn {
    return (control: FormControl): { [s: string]: boolean } | null => {
      if (areaReal < areaNecesaria) {
        return { invalidArea: true };
      }
      return null;
    };
  }
}
