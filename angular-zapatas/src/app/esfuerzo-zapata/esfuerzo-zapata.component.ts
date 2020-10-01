import { DataService } from './../services/data-service.service';
import { ZapataComponent } from './../zapata/zapata.component';
import { Zapata } from './../Model/zapata';
import { EsfuerzoZapata } from './../Model/esfuerzo-zapata';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-esfuerzo-zapata',
  templateUrl: './esfuerzo-zapata.component.html',
  styleUrls: ['./esfuerzo-zapata.component.css']
})
export class EsfuerzoZapataComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'col-md-8';
  esfuerzoZapata: EsfuerzoZapata;


  constructor(public dataService: DataService) {

    this.dataService.subscribeOnChangeZapata((e: EsfuerzoZapata) => {
      if (e != null) {
        this.esfuerzoZapata = this.dataService.esfuerzoZapata;
      }
    });
  }

  ngOnInit(): void {

    this.dataService.subscribeOnChangeZapata((e: EsfuerzoZapata) => {
      if (e != null) {
        this.esfuerzoZapata = this.dataService.esfuerzoZapata;
      }
    });
  }

}
