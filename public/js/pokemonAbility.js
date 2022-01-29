const pokeDiv = document.getElementById('pokemon-info');
const pokeAbilityBtn = document.getElementById('ability');
const pokeAbility = document.getElementById('pokeAbility');

const fetchPokemonAbilities = async () => {
  const pokedexNum = Math.floor(Math.random() * 266);
  let foundAbilities = '';
  let jsonAbilities = {};
  let abilityToDisplay = '';

  try {
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      jsonAbilities = await foundAbilities.json();
      if ('' !== jsonAbilities.name && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonAbilities.name)
          .slice(1, jsonAbilities.name.length)
          .toLowerCase()}`;
      } else {
        abilityToDisplay = 'Tackle';
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonAbilities = 'No ability found...';
  }

  if (pokeAbility.innerText !== '') {
    pokeAbility.innerText = '';
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};

const pokemonAbility = () => {
  pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
  pokeDiv.appendChild(pokeAbility);
};

export { pokemonAbility };
