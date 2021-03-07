import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {MaterialModule} from '../material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { EventEmitterService } from './event-emitter.service';
import { HomeComponent } from './components/home/home.component';
import { AnimatedTextComponent } from './components/animated-text/animated-text.component';
import { GallleryEntryComponent } from './components/galllery-entry/galllery-entry.component';
import { MouseWheelDirective } from './mouse-wheel.directive';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ContactComponent,
    PortfolioItemComponent,
    HomeComponent,
    AnimatedTextComponent,
    GallleryEntryComponent,
    MouseWheelDirective,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
