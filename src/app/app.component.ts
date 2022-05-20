import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { example3 } from './example3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor() {
    example3();
  }

}
