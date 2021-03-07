import { Component, OnInit, Input } from '@angular/core';
import {PortfolioEntry} from '../../models/portfolio-entry.model'
import { EventEmitterService } from '../../event-emitter.service'

@Component({
  selector: 'app-galllery-entry',
  templateUrl: './galllery-entry.component.html',
  styleUrls: ['./galllery-entry.component.scss']
})
export class GallleryEntryComponent implements OnInit {
  @Input() entry: PortfolioEntry
  @Input() imgWidth: number
  @Input() visible: boolean = false;

  initialized: boolean = false

  constructor(private activateService: EventEmitterService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.initialized = true;
    }, 50)
    this.activateService.activateState$.subscribe(state => {
      if (this.initialized != state) {
        this.initialized = state
      }
    })
  }

}
