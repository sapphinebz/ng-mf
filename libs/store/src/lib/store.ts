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
  filterText: string;
}
export const store = new BehaviorSubject<Partial<StoreState>>({});

export const paginatorState = select((store) => store.paginatorState);

export const filterTextState = select((store) => store.filterText);

export function dispatch(state: Partial<StoreState>) {
  const cur = store.value;
  store.next({ ...cur, ...state });
}

export function select<T>(selector: (store: Partial<StoreState>) => T) {
  return store.pipe(
    map((state) => selector(state)),
    distinctUntilChanged(),
    shareReplay(1)
  );
}
