/**
 * Created by TUNE on 2017.07.03..
 */
import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>Here are {{ hero.name }} details:</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
