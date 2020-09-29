import { Component, HostBinding, OnInit } from '@angular/core';
import { DataService } from './../services/data-service.service';
import { FlexionZapata } from './../Model/flexion-model';

@Component({
  selector: 'app-flexion-zapata',
  templateUrl: './flexion-zapata.component.html',
  styleUrls: ['./flexion-zapata.component.css']
})
export class FlexionZapataComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-8';
  flexionZapata: FlexionZapata;
  asDefX: string;
  asDefY: string;

  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChange((e: FlexionZapata) => {
      if (e != null) {
        this.flexionZapata = this.dataService.flexionZapata;
        this.asDefX = 'As dir X requerido (cm²) : ' + this.flexionZapata.asDefX.toFixed(2);
        this.asDefY = 'As dir Y requerido (cm²) : ' + this.flexionZapata.asDefY.toFixed(2);
      }
    });
  }

  ngOnInit(): void {
  }

}
