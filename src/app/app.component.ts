import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ConcatMapExample } from './concat_map';
import { example1 } from './example1';
import { example2 } from './example2';
import { example3 } from './example3';
import { example4 } from './example4';
import { example5 } from './example5';
import { MergeMapRxJS } from './merge_map';
import { SwitchMapRxjs } from './switch_map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor() {
    //example5();
    ConcatMapExample();
  }
}
