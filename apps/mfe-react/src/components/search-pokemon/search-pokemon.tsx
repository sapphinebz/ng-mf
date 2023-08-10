import React from 'react';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import styles from './search-pokemon.module.scss';
import { from } from 'rxjs';

/* eslint-disable-next-line */
export interface SearchPokemonProps {}

export function SearchPokemon(props: SearchPokemonProps) {
  React.useEffect(() => {
    const url = new URL('https://pokeapi.co/api/v2/pokemon');
    url.searchParams.set('limit', `10`);
    url.searchParams.set('offset', `0`);
    const subscription = fromFetch(url.toString(), {
      selector: (res) => res.json(),
    })
      .pipe(
        switchMap((res) => {
          return from(res.results);
        })
      )
      .subscribe();

    return subscription.unsubscribe.bind(subscription);
  }, []);
  return (
    <div className={styles['container']}>
      <div>sdfsdf</div>
      <div>sdfsdf</div>
      <div>sdfsdf</div>
    </div>
  );
}

export default SearchPokemon;
