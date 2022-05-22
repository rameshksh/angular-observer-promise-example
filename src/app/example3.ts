import { interval, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export function example3() {
  console.log('observer Cancelling example3');

  const observable$ = Observable.create((observer) => {
    // ✅ you can pass multiple values by using `next` method
    console.log('observer created');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  observable$.subscribe((x) => console.log('observable$---', x));

  // ✅ 1. Cancelling by using the unsubscribe method
  const observable1$ = interval(1000);
  const subscription1$ = observable1$.subscribe((x) =>
    console.log('observable1$---', x)
  );

  subscription1$.unsubscribe();

  // ✅ 2. Cancelling by taking a number of elements
  const observable2$ = interval(1000);

  observable2$.pipe(take(5)).subscribe((x) => console.log('observable2$--', x));

  // ✅ 3. Conditionally stop listineing for more elements
  const subject3$ = new Subject();
  const observable3$ = interval(1000);

  observable3$.pipe(takeUntil(subject3$)).subscribe((x) => {
    console.log('observer subscribed', x);
    if (Math.random() > 0.5) {
      subject3$.next(1);
      subject3$.complete();
      console.log('complete');
    }
  });
}
