import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sitename: string = 'Jeff Sawyer\'s Portfolio';
  subhead: string = 'Senior Front-end UI/UX & Full Stack Web Developer';
  version: string;
  constructor() {
  	this.version = VERSION.full;
  }
}

