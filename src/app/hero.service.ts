import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }
  /**
   * Returns a list of Heroes
   */
  getHeroes(): Hero[] {
    return HEROES;
  }
  /**
   * Gets the fill list of Heroes
   */
  getHeroesAsync(): Observable<Hero[]> {
    this.messageService.add('HeroesService: Fetch all Heroes');
    return of(HEROES);
  }
  /**
   * Gets a hero by a specified ID
   * @param id takes in the ID specified for a hero
   */
  getHeroAsync(id: number): Observable<Hero> {
    this.messageService.add('fetching Hero: ' + id);
    return of(HEROES.find(hero => hero.id === id));
  }
}
