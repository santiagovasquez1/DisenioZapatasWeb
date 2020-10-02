import { Component, HostBinding, OnInit } from '@angular/core';
import { CortanteUnidireccional } from 'src/app/Model/cortante-unidireccional';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cortante-unidireccional',
  templateUrl: './cortante-unidireccional.component.html',
  styleUrls: ['./cortante-unidireccional.component.css']
})
export class CortanteUnidireccionalComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'col-md-8';
  cortanteUnidireccional: CortanteUnidireccional;

  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChangeZapata((e: CortanteUnidireccional) => {
      if (e != null) {
        this.cortanteUnidireccional = this.dataService.cortanteUnidireccional;
      }
    });
  }

  ngOnInit(): void {
  }

}
