// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import SearchPokemon from '../components/search-pokemon/search-pokemon';

export function App() {
  return (
    <div>
      <SearchPokemon></SearchPokemon>
      <NxWelcome title={'MFE React'}></NxWelcome>
    </div>
  );
}

export default App;
