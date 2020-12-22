import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateToService {

  private _navLink = new Subject<string>()
  private _navState = new Subject<boolean>()
  linkSelected$ = this._navLink.asObservable()
  navChange$ = this._navState.asObservable()

  constructor() { }
  //. When you use next, you fire off an event that all subscribers will listen too.
  navTo(state: string){
    this._navLink.next(state)
  }
  lockNav(state: boolean){
    this._navState.next(state)
  }

}

