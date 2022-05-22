import { of, from, Observable, fromEvent } from 'rxjs';
import { map, delay, switchAll, switchMap, startWith } from 'rxjs/operators';

export function SwitchMapRxjs() {
  const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(delay(1000));
  };

  // using a regular map
  from([1, 2, 3, 4, 5, 6, 7])
    .pipe(map((param) => getData(param)))
    .subscribe((val) => val.subscribe((data) => console.log(data)));

  // using map and switchAll
  from([1, 2, 3, 4, 5, 6, 7])
    .pipe(
      map((param) => getData(param)),
      switchAll()
    )
    .subscribe((val) => console.log(val));

  // using switchMap
  from([1, 2, 3, 4, 5, 6, 7])
    .pipe(switchMap((param) => getData(param)))
    .subscribe((val) => console.log(val));
}


