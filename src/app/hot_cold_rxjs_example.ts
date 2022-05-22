import * as Rx from 'rxjs';
import { fromEvent } from 'rxjs';

export function ColdRxJs() {
  const observable = Rx.Observable.create((observer) => {
    observer.next(Math.random());
  });

  // subscription 1
  observable.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
  });

  // subscription 2
  observable.subscribe((data) => {
    console.log(data); // 0.004617340049055896 (random number)
  });
}

export function ColdRxJs2() {
  const random = Math.random();

  const observable = Rx.Observable.create((observer) => {
    observer.next(random);
  });

  // subscription 1
  observable.subscribe((data) => {
    console.log(data); // 0.11208711666917925 (random number)
  });

  // subscription 2
  observable.subscribe((data) => {
    console.log(data); // 0.11208711666917925 (random number)
  });
}

export function HotRxjs() {
  const observable = fromEvent(document, 'click');

  // subscription 1
  observable.subscribe((event) => {
    console.log(event.clientX); // x position of click
  });

  // subscription 2
  observable.subscribe((event) => {
    console.log(event.clientY); // y position of click
  });
}
