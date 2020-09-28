import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data-service.service';
import { FlexionZapata } from './../Model/flexion-model';

@Component({
  selector: 'app-flexion-zapata',
  templateUrl: './flexion-zapata.component.html',
  styleUrls: ['./flexion-zapata.component.css']
})
export class FlexionZapataComponent implements OnInit {

  flexionZapata: FlexionZapata;
  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChange((e: FlexionZapata) => {
      if (e != null) {
        this.flexionZapata = this.dataService.flexionZapata;
      }
    });
  }

  ngOnInit(): void {
  }

}
