import { Observable } from 'rxjs';

export function example1() {
  console.log('Observable vs promise');

  const obs = new Observable((observer) => {
    console.log('inside observer');
    observer.next(10);
  });

  obs.subscribe((res) => {
    console.log(res);
  });

  const promise = new Promise((resolve, reject) => {
    console.log('promise created');

    resolve(20);
  });

  promise.then((item) => {
    console.log('promise then');
    console.log(item);
  });

  setTimeout(() => {
    console.log('time out zero');
  }, 0);
}
