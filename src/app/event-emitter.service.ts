import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private _stateData = new Subject<boolean>()
  activateState$ = this._stateData.asObservable()



  constructor() { }
  //. When you use next, you fire off an event that all subscribers will listen too.
  sendMessage(state: boolean){
    this._stateData.next(state)
  }
}
export class NavigateTo {
  private _navLink = new Subject<string>()
  activateState$ = this._navLink.asObservable()

  constructor() { }
  //. When you use next, you fire off an event that all subscribers will listen too.
  navTo(state: string){
    this._navLink.next(state)
  }

}
