import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PortfolioEntry} from '../../models/portfolio-entry.model'
import {portfolioEntries} from '../../data/portfolio-entries'


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],

})
export class PortfolioItemComponent implements OnInit {
  entry: PortfolioEntry
  name: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name']
      this.entry = portfolioEntries.find(entry => {
        return entry.name.replace(/\s/g, '') == this.name
      })
      console.log(this.entry.desc)
    })
  }


}
