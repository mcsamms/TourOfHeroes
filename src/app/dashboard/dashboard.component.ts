import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  /**
   * This creates an injected dependency. The constructor
   * determines how HeroService is linked.
   * @param heroService Imports the class HeroService
   */
  constructor(private heroService: HeroService) { }

  /**
   * Initializes the getHeroes function when the dashboard is called.
   */
  ngOnInit() {
    this.getHeroes();
  }

  /**
   * This void method grabs the top 5 heroes using the slice
   * method of the array to get the first entries.
   */
  getHeroes(): void {
    this.heroService.getHeroesAsync().subscribe(
      h => this.heroes = h.slice(0, 5)
    );
  }
}
