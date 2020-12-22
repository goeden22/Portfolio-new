import { Component, OnInit, Input } from '@angular/core';
import { Router, RoutesRecognized, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EventEmitterService } from '../../event-emitter.service'

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit {
  @Input() headers: Array<string[]>
  @Input() paragraphs: string[]
  @Input() tags: string[]

  initialized: boolean = false
  reverseAnims: boolean = false
  

  constructor(private activateService: EventEmitterService) { }

  ngOnInit(): void {
    //trigger animations
    setTimeout(() => {
      this.initialized = true;
    }, 50)
    //reverse animation order to animate on leave
    setTimeout(() => {
      this.reverseAnims = true
    }, 2000)
    //subscribe to route change to anim header on leave
    this.activateService.activateState$.subscribe(state => {
      if (this.initialized != state) {
        this.initialized = state
      }
    })
  }

  calculateTimeout(i: number, reverse: boolean): string {
    return !reverse ? `transform 2s cubic-bezier(.19,1,.22,1) ${i * 185}ms` : `transform 2s cubic-bezier(.19,1,.22,1)`
  }
  calculateParagraphTimeout(reverse: boolean) {
    return `transform 2000ms cubic-bezier(.19,1,.22,1) ${!this.reverseAnims ? '1000ms' : ''}, opacity 2000ms cubic-bezier(.19,1,.22,1) ${!this.reverseAnims ? '1000ms' : ''}`
  }

}
