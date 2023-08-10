import { render } from '@testing-library/react';

import SearchPokemon from './search-pokemon';

describe('SearchPokemon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchPokemon />);
    expect(baseElement).toBeTruthy();
  });
});
