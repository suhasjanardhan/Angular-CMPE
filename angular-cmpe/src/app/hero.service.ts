import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const CONFIG ={

    apiURL: 'http://localhost:3001/fake'
  };

@Injectable()
export class HeroService {

  constructor() { }

  public getApiUrl(){
    return CONFIG.apiURL;
  }





}
