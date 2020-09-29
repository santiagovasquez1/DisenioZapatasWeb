import { ETipoColumna } from './../Model/e-tipo-columna.enum';
import { DataService } from './../services/data-service.service';
import { CortanteBidireccional } from './../Model/cortante-bidireccional';
import { CortanteUnidireccional } from './../Model/cortante-unidireccional';
import { Zapata } from './../Model/zapata';
import { Component, HostBinding, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { IChequeo } from '../Model/i-chequeo';
import { eTipoCalculo } from '../services/e-tipoCalculo';
import { isNull } from '@angular/compiler/src/output/output_ast';

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
  tipoColumna: any[];
  fg: FormGroup;

  constructor(fb: FormBuilder, private dataService: DataService) {
    this.tipoColumna = [];
    this.enviarZapata = new EventEmitter();
    this.formGroupLoad(dataService, fb);

  }

  private formGroupLoad(dataService: DataService, fb: FormBuilder) {
    if (dataService.zapata == null) {
      this.fg = fb.group({
        presionAdmisible: ['', Validators.required],
        gammaConcreto: [2.4, Validators.required],
        pServ: ['', Validators.required],
        mxServ: ['', Validators.required],
        myServ: ['', Validators.required],
        fcZap: [210, Validators.required],
        fyZap: [4220, Validators.required],
        lxCol: ['', Validators.required],
        lyCol: ['', Validators.required],
        rZapata: ['', Validators.required],
        eZapata: ['', Validators.required],
        lxZap: ['', Validators.required],
        lyZap: ['', Validators.required],
        phiCortante: [0.75, Validators.required],
        phiFlexion: [0.90, Validators.required],
        selectedTipoCol: ['Interna'],
        chequeoArea: ['', Validators.compose([
          this.zapataValidator(this.areaReal, this.areaNecesario)
        ])],
      });
    }
    else {
      this.fg = fb.group({
        presionAdmisible: [dataService.zapata.PresionAdmisible, Validators.required],
        gammaConcreto: [2.4, Validators.required],
        pServ: [dataService.zapata.P, Validators.required],
        mxServ: [dataService.zapata.mx, Validators.required],
        myServ: [dataService.zapata.my, Validators.required],
        fcZap: [dataService.zapata.fc, Validators.required],
        fyZap: [dataService.zapata.fy, Validators.required],
        lxCol: [dataService.zapata.lxCol, Validators.required],
        lyCol: [dataService.zapata.lyCol, Validators.required],
        rZapata: [dataService.zapata.recubrimiento, Validators.required],
        eZapata: [dataService.zapata.espesorZapata, Validators.required],
        lxZap: [dataService.zapata.ladoxZap, Validators.required],
        lyZap: [dataService.zapata.ladoyZap, Validators.required],
        phiCortante: [dataService.phiCortanteZapata, Validators.required],
        phiFlexion: [dataService.phiFlexionZapata, Validators.required],
        selectedTipoCol: ['Interna'],
        chequeoArea: ['', Validators.compose([
          this.zapataValidator(this.areaReal, this.areaNecesario)
        ])],
      });

    }
  }

  ngOnInit(): void {
    for (const t in ETipoColumna) {
      if (isNaN(Number(t))) {
        this.tipoColumna.push({ text: t, value: ETipoColumna[t] });
      }
    }
  }

  chequeoZapata(presionAdmisible: number, gammaConcreto: number, pServ: number,
    mxServ: number, myServ: number, fcZap: number, fyZap: number, lxCol: number, lyCol: number,
    rZapata: number, eZapata: number, lxZap: number, lyZap: number, selectedTipoCol: string, phiCortante: number, phiFlexion: number) {

    this.zapata = new Zapata();

    this.zapata.PresionAdmisible = presionAdmisible;
    this.zapata.GammaConcreto = gammaConcreto;
    this.zapata.P = pServ;
    this.zapata.mx = mxServ;
    this.zapata.my = myServ;
    this.zapata.fc = fcZap;
    this.zapata.fy = fyZap;
    this.zapata.lxCol = lxCol;
    this.zapata.lyCol = lyCol;
    this.zapata.recubrimiento = rZapata;
    this.zapata.espesorZapata = eZapata;
    this.zapata.ladoxZap = lxZap;
    this.zapata.ladoyZap = lyZap;

    switch (selectedTipoCol) {
      case 'Interna':
        this.zapata.tipoColumna = ETipoColumna.Interna;
        break;
      case 'Borde':
        this.zapata.tipoColumna = ETipoColumna.Borde;
        break;
      case 'Esquinera':
        this.zapata.tipoColumna = ETipoColumna.Esquinera;
        break;
    }

    this.zapata.setAreaNecesaria();
    this.zapata.setAreaReal();
    this.zapata.setPesoPropio();

    this.areaNecesario = this.zapata.areaNecesaria;
    this.areaReal = this.zapata.areaReal;

    this.enviarZapata.emit(this.zapata);
    this.dataService.zapata = this.zapata;
    this.dataService.phiCortanteZapata = phiCortante;
    this.dataService.phiFlexionZapata = phiFlexion;

    this.dataService.ejecutarCalculo(this.zapata, eTipoCalculo.Esfuerzo, phiCortante);
    this.dataService.ejecutarCalculo(this.zapata, eTipoCalculo.Unidireccional, phiCortante);
    this.dataService.ejecutarCalculo(this.zapata, eTipoCalculo.Bidireccional, phiCortante);
    this.dataService.ejecutarCalculo(this.zapata, eTipoCalculo.Flexion, phiFlexion);
    return false;
  }

  private calculosLoad() {

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
