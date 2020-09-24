import { CortanteBidireccional } from './../Model/cortante-bidireccional';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-cortante-bidireccional',
  templateUrl: './cortante-bidireccional.component.html',
  styleUrls: ['./cortante-bidireccional.component.css']
})
export class CortanteBidireccionalComponent implements OnInit {

  cortanteBidireccional: CortanteBidireccional;

  constructor(public dataService: DataService) {
    this.dataService.subscribeOnChange((e: CortanteBidireccional) => {
      if (e != null) {
        this.cortanteBidireccional = this.dataService.cortanteBidireccional;
      }
    });
  }


  ngOnInit(): void {
  }

}
