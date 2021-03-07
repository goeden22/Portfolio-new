import { Component, OnInit,Output, EventEmitter, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

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
  @ViewChild('gallery') galleryView: ElementRef;
  @ViewChild('galleryEntry', { read: ElementRef }) galEntry2:ElementRef;


  initialized: boolean = false
  portfolioEntries : Array<PortfolioEntry[]> = []
  headers: Array<string> = []
  route: string
  navLock: boolean = true
  highlighted: number
  //scrolling variables
  galleryHeight: number
  entryHeight: number
  scrollLevel: number
  scrollValue: number


  ngOnInit(): void {
    this.route = this.router.url
    this.portfolioEntries.push(portfolioEntries.slice(0,Math.floor(portfolioEntries.length/2)))
    this.portfolioEntries.push(portfolioEntries.slice(Math.floor(portfolioEntries.length/2), portfolioEntries.length));

    portfolioEntries.map(entry => {
      this.headers.push(entry.name)
    })
      setTimeout(() => {
        this.initialized = true
      },50)
      setTimeout(() => {
        this.navLock = false
        //setting gallery hight atribute for scroll purposes
        
      }, 2000)
      
  }
  ngAfterViewInit(){
    setTimeout(() =>{
      this.getHeight()
      this.scrollLevel = 0
    }, 1000)
    
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
  onLinkHover(index: number){
    this.scrollToSelected(index)
    this.highlight(index)
  }
  highlight(entry: number){
    this.highlighted = entry
  }
  getHeight(){
    this.galleryHeight = this.galleryView.nativeElement.offsetHeight;
    this.entryHeight = this.galEntry2.nativeElement.offsetHeight
   
  }
  //Function for handling directives
  scrollUp(){
    if (this.scrollLevel !== 0){
      this.scrollLevel -= 1
      this.scrollValue = (this.entryHeight + 9) * this.scrollLevel
    }
   
  }
  scrollDown(){
    if (this.scrollLevel < 2){
      this.scrollLevel += 1
    this.scrollValue = (this.entryHeight + 9) * this.scrollLevel
    }
  
    
  
  }
  scrollToSelected(index :number){
    this.scrollLevel = index
    this.scrollValue = (this.entryHeight + 9) * this.scrollLevel
  }
}



