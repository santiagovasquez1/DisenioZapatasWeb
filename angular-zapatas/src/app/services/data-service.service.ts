import { Zapata } from './../Model/zapata';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  zapataGobal: Zapata = null;
  constructor() { }
}
