import { Component } from '@angular/core';
import { Router, RouterOutlet, RoutesRecognized, Event } from '@angular/router'
import { EventEmitterService } from './event-emitter.service'
import { NavigateToService } from './navigate-to.service'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  title = 'portfolio2020';
  headers: string[]
  name: string = "Aleksander Pilarski"
  initialized: boolean = false
  disableNav: boolean = false
  route: string

 
  calculateTimeout(i: number): string {
    return `transform 2s cubic-bezier(.19,1,.22,1) ${i * 185}ms`
  }
  constructor(private router: Router, private activateService: EventEmitterService, private _navigateTo: NavigateToService) {
    router.events.subscribe((routerEvent : Event) => {
      if (routerEvent instanceof RoutesRecognized){
        this.route = routerEvent.url
      }
    })
    _navigateTo.linkSelected$.subscribe(
      link => {
          this.navigate(`portfolio/${link}`)
      });
  }
  ngOnInit(): void {
    this.headers = this.name.split(' ')
    this.route = this.router.url
    setTimeout(() => {
      this.initialized = true;
    }, 100)

  }
  navigate(url: string) {
    if (this.route !== url){
      this.changeNavState(true)
    
      this.activateService.sendMessage(false)
    setTimeout(() => {
      this.router.navigateByUrl(url)
    }, 1000)
    setTimeout(() => {
      this.changeNavState(false)
      this.activateService.sendMessage(true)
    }, 3000)
    }
  
  }
  changeNavState(navState: boolean) {
    this.disableNav = navState
    this._navigateTo.lockNav(navState)
  }
}



