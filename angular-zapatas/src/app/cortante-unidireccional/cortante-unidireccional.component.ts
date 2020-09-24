import { CortanteUnidireccional } from './../Model/cortante-unidireccional';
import { Component, HostBinding, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-cortante-unidireccional',
  templateUrl: './cortante-unidireccional.component.html',
  styleUrls: ['./cortante-unidireccional.component.css']
})
export class CortanteUnidireccionalComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'col-md-8';
  cortanteUnidireccional: CortanteUnidireccional;

  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChange((e: CortanteUnidireccional) => {
      if (e != null) {
        this.cortanteUnidireccional = this.dataService.cortanteUnidireccional;
      }
    });
  }

  ngOnInit(): void {
  }

}
