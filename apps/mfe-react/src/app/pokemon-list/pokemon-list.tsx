import styles from './pokemon-list.module.scss';
import * as ReactDOM from 'react-dom/client';
/* eslint-disable-next-line */
export interface PokemonListProps {}
import { StrictMode, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { paginatorState } from '@ng-mf/store';
import { useObservableState } from '../../shared/use-observable-state';

export function PokemonList(props: PokemonListProps) {
  const state = useObservableState(paginatorState);

  return (
    <div className={styles['container']}>
      <div>page: {state?.page}</div>
      <h1>Welcome to PokemonList!</h1>
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
