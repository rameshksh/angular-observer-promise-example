import { of, from } from 'rxjs';
import { map, mergeMap, delay, mergeAll } from 'rxjs/operators';

export function MergeMapRxJS() {
  const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(delay(1000));
  };

  // using a regular map
  from([1, 2, 3, 4])
    .pipe(map((param) => getData(param)))
    .subscribe((val) => val.subscribe((data) => console.log(data)));

  // using map and mergeAll
  from([1, 2, 3, 4])
    .pipe(
      map((param) => getData(param)),
      mergeAll()
    )
    .subscribe((val) => console.log(val));

  // using mergeMap
  from([1, 2, 3, 4])
    .pipe(mergeMap((param) => getData(param)))
    .subscribe((val) => console.log(val));
}
