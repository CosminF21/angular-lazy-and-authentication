import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {
  initObject?: string;
  constructor() { }

  load(){
    this.initObject = 'app initialized';
  }
}
