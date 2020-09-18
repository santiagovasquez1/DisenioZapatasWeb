import { Zapata } from './../Model/zapata';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-zapata',
  templateUrl: './zapata.component.html',
  styleUrls: ['./zapata.component.css']
})
export class ZapataComponent implements OnInit {

  @Input() zapata: Zapata;
  @HostBinding('attr.class') cssClass = 'col-md-8';
  constructor() { }

  ngOnInit(): void {
  }

}
