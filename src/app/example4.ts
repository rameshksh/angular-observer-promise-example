import { interval, Observable } from 'rxjs';

export function example4() {
  const foo = new Promise((resolve) => {
    console.log('1. Callback execution');
    resolve(true);
  });

  foo.then(() => {
    console.log('2. Promise resolution');
  });

  console.log('3. Pre exit method statement');

  // ✅ console output
  // 1. Callback execution
  // 3. Pre exit method statement
  // 2. Promise resolution

  const observable$ = new Observable((observer) => {
    console.log('1. Execution of observable body');
    observer.next(1);
    observer.complete();
  });

  console.log('2. Pre Subscribe statement');

  observable$.subscribe(() => {
    console.log('3. Execution of subscribe callback');
  });

  // ✅ console output
  // 2. Pre Subscribe statement
  // 1. Execution of observable body
  // 3. Execution of subscribe callback
}
