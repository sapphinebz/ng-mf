// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import PokemonList from './pokemon-list/pokemon-list';

export function App() {
  return (
    <div>
      <PokemonList></PokemonList>
      <NxWelcome title={'MFE React'}></NxWelcome>
    </div>
  );
}

export default App;
