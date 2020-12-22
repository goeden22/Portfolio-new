import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { Router, RoutesRecognized, Event, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EventEmitterService} from '../../event-emitter.service'
import { NavigateToService} from '../../navigate-to.service'

import { calculateTimeout } from '../../functions/anim'

import {portfolioEntries} from '../../data/portfolio-entries'
import {PortfolioEntry} from '../../models/portfolio-entry.model'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  initialized: boolean = false
  portfolioEntries : Array<PortfolioEntry[]> = []
  headers: Array<string> = []
  route: string
  navLock: boolean = false


  ngOnInit(): void {
    this.route = this.router.url
    this.portfolioEntries.push(portfolioEntries.slice(0,Math.floor(portfolioEntries.length/2)))
    this.portfolioEntries.push(portfolioEntries.slice(Math.floor(portfolioEntries.length/2), portfolioEntries.length))
    portfolioEntries.map(entry => {
      this.headers.push(entry.name)
    })
      setTimeout(() => {
        this.initialized = true
      },50)
  }
  constructor(private router: Router, private activateService: EventEmitterService, private _navigateTo: NavigateToService) {
    router.events.subscribe((routerEvent : Event) => {
      if (routerEvent instanceof RoutesRecognized){
        this.route = routerEvent.url
      }
    })
    this._navigateTo.navChange$.subscribe(state => {
        this.navLock = state
    })
  }

  onSelect(name:string){
    if(!this.navLock){
      this._navigateTo.navTo(name.replace(/\s/g, ''));
    }
    
  }
}



