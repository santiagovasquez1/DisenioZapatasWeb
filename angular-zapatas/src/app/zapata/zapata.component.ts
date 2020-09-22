import { Zapata } from './../Model/zapata';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zapata',
  templateUrl: './zapata.component.html',
  styleUrls: ['./zapata.component.css']
})
export class ZapataComponent implements OnInit {

  @Input() zapata: Zapata;
  @HostBinding('attr.class') cssClass = 'col-md-8';
  fg: FormGroup;

  constructor(fb: FormBuilder) {
    this.fg = fb.group({
      presionAdmisible: [''],
      gammaConcreto: [''],
      pServ: [''],
      mxServ: [''],
      myServ: [''],
      lxCol: [''],
      lyCol: [''],
      rzapata: [''],
      ezapata: [''],
      lxZap: [''],
      lyZap: [''],
    });
  }

  ngOnInit(): void {
  }

}
