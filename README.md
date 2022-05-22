# angular-9nrtxu

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-9nrtxu)

Instead, we can simply choose the appropriate operator based on the use case:

if we need to do things in sequence while waiting for completion, then concatMap is the right choice

for doing things in parallel, mergeMap is the best option

in case we need cancellation logic, switchMap is the way to go

for ignoring new Observables while the current one is still ongoing, exhaustMap does just that