/**
 * Created by TUNE on 2017.07.06..
 */
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to {{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heros';
}
