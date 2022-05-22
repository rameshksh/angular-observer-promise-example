import { HttpParams } from '@angular/common/http';
import { fromEvent, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';

export class Lesson {}

export function RxJsOperators() {
  const searchText$: Observable<string> = fromEvent<any>(
    this.input.nativeElement,
    'keyup'
  )
    .pipe(
      map((event) => event.target.value),
      startWith(''),
      debounceTime(400)
    )
    .subscribe(console.log);

  function debounceTime(
    arg0: number
  ): import('rxjs').OperatorFunction<any, unknown> {
    throw new Error('Function not implemented.');
  }

  const searchText1$: Observable<string> = fromEvent<any>(
    this.input.nativeElement,
    'keyup'
  ).pipe(
    map((event) => event.target.value),
    startWith(''),
    debounceTime(400),
    distinctUntilChanged()
  );

  const lessons$: Observable<Lesson[]> = searchText$
    .pipe(switchMap((search) => this.loadLessons(search)))
    .subscribe();

  function loadLessons(search: string): Observable<Lesson[]> {
    const params = new HttpParams().set('search', search);

    return this.http.get(`/api/lessons/${1}`, { params });
  }
}
