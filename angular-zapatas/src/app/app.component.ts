import { Zapata } from './Model/zapata';
import { DataService } from './services/data-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-zapatas';

  constructor(public dataService: DataService) {

  }
  RecibirZapata(zapatai: Zapata) {
    this.dataService.zapataGobal = zapatai;
  }
}
