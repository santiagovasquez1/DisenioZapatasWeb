import { Zapata } from './../Model/zapata';
import { DataService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-zapata',
  templateUrl: './vista-zapata.component.html',
  styleUrls: ['./vista-zapata.component.css']
})
export class VistaZapataComponent implements OnInit {


  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
