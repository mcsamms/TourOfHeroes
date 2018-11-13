import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /**
   * Hero component constructor
   * @param heroService Takes in the injected dependency from
   * hero.service.ts. The injected dependency of the Hero Service
   */
  constructor(private heroService: HeroService) { }

  /**
   * Sets the default instance of Hero in this component
   */
  hero: Hero = {id: 1, name: 'Windstorm'};
  /**
   * Sets the list of HEROES in mock-heroes to a local instance
   * called heroes
   */
  heroes: Hero[] = [];
  selectedHero: Hero;

  /**
   * Gets the heroes list when the component is initialized
   */
  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Get the full list of heroes
   */
  getHeroes(): void {
    // sync communication
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesAsync().subscribe(heroes =>
        this.heroes = heroes
      );
  }
  /**
   * Sets the selectedHero to the hero that is clicked or selected.
   * @param hero Takes in the selected hero for events like
   * a click event.
   */
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
