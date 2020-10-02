import { Component, OnInit } from '@angular/core';
import { CortanteBidireccional } from 'src/app/Model/cortante-bidireccional';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cortante-bidireccional',
  templateUrl: './cortante-bidireccional.component.html',
  styleUrls: ['./cortante-bidireccional.component.css']
})
export class CortanteBidireccionalComponent implements OnInit {

  cortanteBidireccional: CortanteBidireccional;

  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChangeZapata((e: CortanteBidireccional) => {
      if (e != null) {
        this.cortanteBidireccional = this.dataService.cortanteBidireccional;
      }
    });
  }


  ngOnInit(): void {
  }

}
