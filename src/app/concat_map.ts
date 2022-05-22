import { of, from } from 'rxjs';
import { map, delay, mergeMap, concatMap } from 'rxjs/operators';

export function ConcatMapExample() {
  const getData = (param) => {
    const delayTime = Math.floor(Math.random() * 10000) + 1;
    return of(
      `retrieved new data with params: ${param} and delay: ${delayTime}`
    ).pipe(delay(delayTime));
  };

  // using a regular map
  from([1, 2, 3, 4])
    .pipe(map((param) => getData(param)))
    .subscribe((val) => val.subscribe((data) => console.log('map:', data)));

  // using mergeMap
  from([1, 2, 3, 4])
    .pipe(mergeMap((param) => getData(param)))
    .subscribe((val) => console.log('mergeMap:', val));

  // using concatMap
  from([1, 2, 3, 4])
    .pipe(concatMap((param) => getData(param)))
    .subscribe((val) => console.log('concatMap:', val));
}
