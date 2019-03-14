import { Component, OnInit } from '@angular/core';
import { Hero } from './../interface/hero'
import { HeroService } from './../service/hero.service';
import { LogUpdateService } from './../swService/log-update.service';
import { CheckForUpdateService } from './../swService/check-for-update.service';
import { SwPushService } from './../swService/sw-push.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]

  constructor(
    private heroService: HeroService,
    private logUpdateService: LogUpdateService,
    private swPushService: SwPushService,
    private checkForUpdateService: CheckForUpdateService,
  ) { }
  // private swPushService: SwPushService,
  // private checkForUpdateService: CheckForUpdateService,

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  putRequest(){
    // this.swPushService.helloFn().then(res=>{
      this.heroService.putHello(this.swPushService.enterKey).subscribe(hello=>{
        console.log(hello)
      });
    // }).catch(err=>{
    //   console.log('not allowed')
    // })
  }
}
