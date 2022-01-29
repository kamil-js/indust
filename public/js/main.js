import { invoquePokemon } from './invoquePokemon.js';
import { pokemonAbility } from './pokemonAbility.js';

window.addEventListener('DOMContentLoaded', () => {
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
