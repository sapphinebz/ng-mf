import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
export interface PaginatorState {
  page?: number;
  first?: number;
  rows?: number;
  pageCount?: number;
}
export interface StoreState {
  paginatorState: PaginatorState;
}
export const store = new BehaviorSubject<Partial<StoreState>>({});

export const paginatorState = select((store) => store.paginatorState);

export function dispatchPaginatorState(state: PaginatorState) {
  const cur = store.value;
  store.next({ ...cur, paginatorState: state });
}

export function select<T>(selector: (store: Partial<StoreState>) => T) {
  return store.pipe(
    map((state) => selector(state)),
    distinctUntilChanged(),
    shareReplay(1)
  );
}
