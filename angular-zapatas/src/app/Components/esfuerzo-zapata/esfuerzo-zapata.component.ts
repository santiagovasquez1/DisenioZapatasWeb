
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { EsfuerzoZapata } from 'src/app/Model/esfuerzo-zapata';
import { DataService } from 'src/app/services/data-service.service';

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
