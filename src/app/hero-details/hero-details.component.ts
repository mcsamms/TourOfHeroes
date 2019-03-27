import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
/**
 * @author Matthew Samms
 */

/**
 * This is the imported component object
 * files will be present in the hero-details subfolder
 */
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  /**
   * This input sends a Hero into the hero-details component
   * when the component is called
   */
  @Input()hero: Hero;

  /**
   * This is the constructor to get a specific hero.
   * @param route ActivatedRoute gets me access to the URL so I can pick
   *  up the id portion of the URL for the hero detail I need to fetch
   * @param heroService get access to the HEROES datasource
   * @param location allaws access to the app browser history
   */
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  /**
   * Get access to the url of the hero
   */
  getHero(): void {
    // the + forces a reassignment of a constant
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.heroService.getHeroAsync(id).subscribe(hero =>
        this.hero = hero
      );
  }
  /**
   * This brings you back to the dashboard or the hero list.
   */
  goBack(): void {
    this.location.back();
  }

}
