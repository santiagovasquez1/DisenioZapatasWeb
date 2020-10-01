import { FlexionZapata } from './../Model/flexion-model';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { DataService } from './../services/data-service.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Refuerzo } from '../Model/refuerzo';
import { DespieceZapata } from '../Model/despiece-zapata';
import { FileVisitorCancelToken } from '@angular-devkit/schematics';


@Component({
  selector: 'app-despiece-zapata',
  templateUrl: './despiece-zapata.component.html',
  styleUrls: ['./despiece-zapata.component.css']
})

export class DespieceZapataComponent implements OnInit {

  asDefX: string;
  asDefY: string;
  seleccionado: string;
  despieceZapata: DespieceZapata;
  sepX: number;
  sepY: number;
  fg: FormGroup;

  constructor(fb: FormBuilder, public dataService: DataService) {

    this.asDefX = 'As dir X requerido (cm²) : ' + dataService.flexionZapata.asDefX.toFixed(2);
    this.asDefY = 'As dir Y requerido (cm²) : ' + dataService.flexionZapata.asDefY.toFixed(2);

    this.despieceZapata = dataService.despieceZapata;

    this.loadDespieceZapata(dataService, fb);
  }

  private loadDespieceZapata(dataService: DataService, fb: FormBuilder) {
    if (this.despieceZapata.refuerzoX == null && this.despieceZapata.refuerzoY == null) {

      const sepX = this.despieceZapata.calcSep(dataService.refuerzos[0], dataService.flexionZapata.asDefX);
      const sepy = this.despieceZapata.calcSep(dataService.refuerzos[0], dataService.flexionZapata.asDefY);
      this.despieceZapata.asDefX = this.despieceZapata.calcAsDef(dataService.refuerzos[0], sepX);
      this.despieceZapata.asDefY = this.despieceZapata.calcAsDef(dataService.refuerzos[0], sepy);

      this.fg = fb.group({
        RefuerzoX: [dataService.refuerzos[0], Validators.required],
        RefuerzoY: [dataService.refuerzos[0], Validators.required],
        SeparacionX: [sepX.toFixed(2), Validators.required],
        SeparacionY: [sepy.toFixed(2), Validators.required],
      });
    }
    else {
      this.fg = fb.group({
        RefuerzoX: [this.despieceZapata.refuerzoX, Validators.required],
        RefuerzoY: [this.despieceZapata.refuerzoY, Validators.required],
        SeparacionX: [this.despieceZapata.sepX.toFixed(2), Validators.required],
        SeparacionY: [this.despieceZapata.sepY.toFixed(2), Validators.required],
      });
    }
  }

  ngOnInit(): void {

  }

  selectOnChange(refuerzo: Refuerzo, asi: number, sep: AbstractControl, direccion: string) {

    sep.setValue(this.despieceZapata.calcSep(refuerzo, asi).toFixed(2));
    this.calcAsDef(direccion, sep, refuerzo);
    this.dataService.despieceZapata = this.despieceZapata;

  }

  inputOnChange(refuerzo: Refuerzo, sep: AbstractControl, direccion: string) {
    this.calcAsDef(direccion, sep, refuerzo);
    this.dataService.despieceZapata = this.despieceZapata;
  }

  private calcAsDef(direccion: string, sep: AbstractControl, refuerzo: Refuerzo) {
    switch (direccion) {
      case 'X1':
        this.despieceZapata.sepX = sep.value;
        this.despieceZapata.refuerzoX = refuerzo;
        this.despieceZapata.asDefX = this.despieceZapata.calcAsDef(refuerzo, sep.value);
        break;
      case 'Y1':
        this.despieceZapata.sepY = sep.value;
        this.despieceZapata.refuerzoY = refuerzo;
        this.despieceZapata.asDefY = this.despieceZapata.calcAsDef(refuerzo, sep.value);
        break;
    }
  }



}
