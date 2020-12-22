import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import {HomeComponent} from './components/home/home.component'
import {PortfolioComponent} from './components/portfolio/portfolio.component'
import {PortfolioItemComponent} from './components/portfolio-item/portfolio-item.component'
import {ContactComponent} from './components/contact/contact.component'

import { Observable, of } from 'rxjs';
import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs/internal/operators';


@Injectable()
class DelayResolve implements Resolve<Observable<any>> {

  constructor() {
  }

  resolve(): any {
    return of('delayed navigation').pipe(delay(500));
  }
}

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent, children:[{
    path: ':name', component: PortfolioItemComponent
  }]},
 
  {
    path: 'contact',
    component: ContactComponent,
   
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
