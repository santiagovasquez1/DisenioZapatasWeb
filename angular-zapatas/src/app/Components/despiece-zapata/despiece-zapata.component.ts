
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FileVisitorCancelToken } from '@angular-devkit/schematics';
import { parse } from 'path';
import { DespieceZapata } from 'src/app/Model/despiece-zapata';
import { Refuerzo } from 'src/app/Model/refuerzo';
import { Zapata } from 'src/app/Model/zapata';
import { DataService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-despiece-zapata',
  templateUrl: './despiece-zapata.component.html',
  styleUrls: ['./despiece-zapata.component.css']
})

export class DespieceZapataComponent implements OnInit {

  asDefX: string;
  asDefY: string;
  despieceZapata: DespieceZapata;
  sepX: number;
  sepY: number;
  fg: FormGroup;
  zapata: Zapata;

  constructor(fb: FormBuilder, public dataService: DataService) {

    this.asDefX = 'As dir X requerido (cm²) : ' + dataService.flexionZapata.asDefX.toFixed(2);
    this.asDefY = 'As dir Y requerido (cm²) : ' + dataService.flexionZapata.asDefY.toFixed(2);

    this.despieceZapata = dataService.despieceZapata;
    this.zapata = dataService.zapata;
    this.loadDespieceZapata(dataService, fb);

  }

  private loadDespieceZapata(dataService: DataService, fb: FormBuilder) {
    if (this.despieceZapata.refuerzoX == null && this.despieceZapata.refuerzoY == null) {

      const sepX = this.despieceZapata.calcSep(dataService.refuerzos[0], dataService.flexionZapata.asDefX);
      const sepy = this.despieceZapata.calcSep(dataService.refuerzos[0], dataService.flexionZapata.asDefY);

      this.despieceZapata.asDefX = this.despieceZapata.calcAsDef(dataService.refuerzos[0], sepX);
      this.despieceZapata.asDefY = this.despieceZapata.calcAsDef(dataService.refuerzos[0], sepy);
      this.despieceZapata.sepX = sepX;
      this.despieceZapata.sepY = sepy;
      this.despieceZapata.refuerzoX = dataService.refuerzos[0];
      this.despieceZapata.refuerzoY = dataService.refuerzos[0];
      this.despieceZapata.gancho90X = true;
      this.despieceZapata.gancho90Y = true;
      this.calcLongRef(this.despieceZapata.gancho90X, 'X1');
      this.calcLongRef(this.despieceZapata.gancho90Y, 'Y1');

      this.calcPesoCant('X1');
      this.calcPesoCant('Y1');


      this.fg = fb.group({
        RefuerzoX: [dataService.refuerzos[0], Validators.required],
        RefuerzoY: [dataService.refuerzos[0], Validators.required],
        SeparacionX: [parseFloat(sepX.toFixed(2)), Validators.required],
        SeparacionY: [parseFloat(sepy.toFixed(2)), Validators.required],
        Gancho90X: [true, Validators.required],
        Gancho90Y: [true, Validators.required]
      });
    }
    else {
      const sepX = this.despieceZapata.sepX;
      const sepy = this.despieceZapata.sepY;
      this.fg = fb.group({
        RefuerzoX: [this.despieceZapata.refuerzoX, Validators.required],
        RefuerzoY: [this.despieceZapata.refuerzoY, Validators.required],
        SeparacionX: [parseFloat(sepX.toFixed(2)), Validators.required],
        SeparacionY: [parseFloat(sepy.toFixed(2)), Validators.required],
        Gancho90X: [this.despieceZapata.gancho90X, Validators.required],
        Gancho90Y: [this.despieceZapata.gancho90Y, Validators.required],
      });
    }
  }

  ngOnInit(): void {

  }

  selectOnChange(refuerzo: Refuerzo, asi: number, sep: AbstractControl, direccion: string) {

    sep.setValue(this.despieceZapata.calcSep(refuerzo, asi).toFixed(2));
    this.calcAsDef(direccion, sep, refuerzo);
    this.dataService.despieceZapata = this.despieceZapata;
    return false;
  }

  inputOnChange(refuerzo: Refuerzo, sep: AbstractControl, direccion: string) {
    this.calcAsDef(direccion, sep, refuerzo);
    this.dataService.despieceZapata = this.despieceZapata;
    return false;
  }

  checkBoxOnChange(gancho: boolean, direccion: string) {

    this.calcLongRef(gancho, direccion);

    this.calcPesoCant(direccion);

    this.dataService.despieceZapata = this.despieceZapata;
  }

  private calcPesoCant(direccion: string) {
    switch (direccion) {
      case 'X1':
        this.despieceZapata.cantX = this.despieceZapata.calcCantidad(this.zapata.ladoxZap, this.despieceZapata.sepX);
        this.despieceZapata.PesoX = this.despieceZapata.calcPesoRef(this.despieceZapata.refuerzoX,
          this.despieceZapata.longRefuerzoX, this.despieceZapata.cantX);
        break;
      case 'Y1':
        this.despieceZapata.cantY = this.despieceZapata.calcCantidad(this.zapata.ladoyZap, this.despieceZapata.sepY);
        this.despieceZapata.PesoY = this.despieceZapata.calcPesoRef(this.despieceZapata.refuerzoY,
          this.despieceZapata.longRefuerzoY, this.despieceZapata.cantY);
        break;
    }
  }

  private calcLongRef(gancho: boolean, direccion: string) {
    if (gancho === true) {
      switch (direccion) {
        case 'X1':
          this.despieceZapata.gancho90X = gancho;
          this.despieceZapata.longRefuerzoX = this.zapata.ladoxZap - (2 * this.zapata.recubrimiento)
            + 2 * (this.despieceZapata.refuerzoX.longGancho);
          break;
        case 'Y1':
          this.despieceZapata.gancho90Y = gancho;
          this.despieceZapata.longRefuerzoY = this.zapata.ladoyZap - (2 * this.zapata.recubrimiento)
            + 2 * (this.despieceZapata.refuerzoY.longGancho);
          break;
      }
    }
    else {
      switch (direccion) {
        case 'X1':
          this.despieceZapata.longRefuerzoX = this.zapata.ladoxZap - (2 * this.zapata.recubrimiento);
          break;
        case 'Y1':
          this.despieceZapata.longRefuerzoY = this.zapata.ladoyZap - (2 * this.zapata.recubrimiento);
          break;
      }
    }
  }

  private calcAsDef(direccion: string, sep: AbstractControl, refuerzo: Refuerzo) {
    switch (direccion) {
      case 'X1':
        this.despieceZapata.sepX = parseFloat(sep.value);
        this.despieceZapata.refuerzoX = refuerzo;
        this.despieceZapata.asDefX = this.despieceZapata.calcAsDef(refuerzo, parseFloat(sep.value));
        this.calcLongRef(this.despieceZapata.gancho90X, direccion);
        this.calcPesoCant('X1');
        break;
      case 'Y1':
        this.despieceZapata.sepY = parseFloat(sep.value);
        this.despieceZapata.refuerzoY = refuerzo;
        this.despieceZapata.asDefY = this.despieceZapata.calcAsDef(refuerzo, parseFloat(sep.value));
        this.calcLongRef(this.despieceZapata.gancho90Y, direccion);
        this.calcPesoCant('Y1');
        break;
    }
  }

}
