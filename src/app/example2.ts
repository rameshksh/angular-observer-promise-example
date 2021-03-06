import { Observable } from 'rxjs';

export function example2() {
  // Promises
  console.log('Promises example2');

  const x = new Promise((resolve) => {
    console.log('promise created');

    setTimeout(() => {
      // ✅ when resolve is called, the promise will become
      // fullfilled and it's value won't ever change
      console.log('inside setTimeout');
      resolve(Math.random() * 10);
    }, 3000);
  });

  x.then((res) => {
    console.log('promise resolved---', res);
  });

  // Observables
  const observable$ = Observable.create((observer) => {
    // ✅ you can pass multiple values by using `next` method
    console.log('observer created');
    observer.next('next - 1');
    observer.next('next - 2');
    observer.next('next - 3');
    observer.complete();
  });

  observable$.subscribe((s) => console.log('subscribe---', s));
}
