import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { FlexionZapata } from 'src/app/Model/flexion-model';
import { DataService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-flexion-zapata',
  templateUrl: './flexion-zapata.component.html',
  styleUrls: ['./flexion-zapata.component.css']
})
export class FlexionZapataComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-8';
  flexionZapata: FlexionZapata;


  constructor(public dataService: DataService) {

    this.dataService.subscribeOnChangeZapata((e: FlexionZapata) => {
      if (e != null) {
        this.flexionZapata = this.dataService.flexionZapata;
      }
    });
  }

  ngOnInit(): void {

  }

}
