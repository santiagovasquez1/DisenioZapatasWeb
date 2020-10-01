import { FormGroup } from '@angular/forms';
import { DataService } from './../services/data-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Refuerzo } from '../Model/refuerzo';

@Component({
  selector: 'app-despiece-zapata',
  templateUrl: './despiece-zapata.component.html',
  styleUrls: ['./despiece-zapata.component.css']
})
export class DespieceZapataComponent implements OnInit {

  asDefX: string;
  asDefY: string;
  seleccionado: string;
  @Input() RefuerzoX: Refuerzo;
  @Input() RefuerzoY: Refuerzo;
  @Input() SeparacionX: number;
  @Input() SeparacionY: number;
  fg: FormGroup;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.subscribeOnChange((e: FlexionZapata) => {
    //   if (e != null) {
    //     this.flexionZapata = this.dataService.flexionZapata;
    //     this.asDefX = 'As dir X requerido (cm²) : ' + this.flexionZapata.asDefX.toFixed(2);
    //     this.asDefY = 'As dir Y requerido (cm²) : ' + this.flexionZapata.asDefY.toFixed(2);
    //   }
    // });
  }

}
