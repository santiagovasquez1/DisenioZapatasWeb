
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

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
