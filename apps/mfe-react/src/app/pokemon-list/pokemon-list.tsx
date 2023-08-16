import styles from './pokemon-list.module.scss';
import * as ReactDOM from 'react-dom/client';
/* eslint-disable-next-line */
export interface PokemonListProps {}
import { StrictMode, useEffect, useMemo } from 'react';
import { combineLatest, from, fromEvent, of, switchMap } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { paginatorState, filterTextState } from '@ng-mf/store';
import { useObservableState } from '../../shared/use-observable-state';
import { PokemonModel, ResponsePokemonPage } from '../../shared/pokemon-model';

export function PokemonList(props: PokemonListProps) {
  const pokemons$ = useMemo(() => {
    return paginatorState.pipe(
      switchMap((paginator) => {
        if (paginator) {
          const url = new URL(`https://pokeapi.co/api/v2/pokemon`);
          url.searchParams.set('limit', `${paginator.rows}`);
          url.searchParams.set('offset', `${paginator.first}`);
          return fromFetch<ResponsePokemonPage>(url.toString(), {
            selector: (res) => res.json(),
          }).pipe(
            switchMap((res) => {
              return from(res.results).pipe(
                mergeMap((result) =>
                  fromFetch<PokemonModel>(result.url, {
                    selector: (res) => res.json(),
                  })
                ),
                toArray()
              );
            })
          );
        }
        return of([]);
      })
    );
  }, []);

  const filterPokemon$ = useMemo(() => {
    return combineLatest([filterTextState, pokemons$]).pipe(
      map(([filterText, pokemons]) => {
        if (filterText) {
          return pokemons.filter((pk) => pk.name.includes(filterText));
        }
        return pokemons;
      })
    );
  }, []);

  const results = useObservableState(filterPokemon$, []);

  return (
    <div
      className={styles['container']}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {results.map((result) => (
          <div key={result.name}>
            <div>
              <img src={result.sprites.front_default} alt={result.name} />
            </div>
            <div>{result.name}</div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}

class PokemonListElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const root = ReactDOM.createRoot(mountPoint);
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    root.render(
      <StrictMode>
        <PokemonList />
      </StrictMode>
    );
  }

  disconnectedCallback() {
    console.log('react destroy');
  }
}

customElements.define('pokemon-list-element', PokemonListElement);

export default PokemonList;
