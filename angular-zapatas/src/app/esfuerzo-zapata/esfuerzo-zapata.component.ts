import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-esfuerzo-zapata',
  templateUrl: './esfuerzo-zapata.component.html',
  styleUrls: ['./esfuerzo-zapata.component.css']
})
export class EsfuerzoZapataComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'col-md-8';
  constructor() { }

  ngOnInit(): void {
  }

}
