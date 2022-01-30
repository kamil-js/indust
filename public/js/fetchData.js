window.addEventListener('DOMContentLoaded', () => {
  /** @type {string} variable qui correspond à l'id dans un paragraphe qui permettra de stocker le nom du Pokémon*/
  const pokeP = document.getElementById('pokeInfo');
  /** @type {string} variable qui permet de stocker les informations des pokemons dans une div*/
  const pokeDiv = document.getElementById('pokemon-info');
  /** @type {html element} variable qui correspond au bouton qui va permettre de générer les capacités des pokémons*/
  const pokeAbilityBtn = document.getElementById('ability');

  /**
   * Fonction asynchrone qui permet de  générer aléatoirement un pokemon dans l'API et 
   * d'afficher le nom du Pokémon sur la page HTML si le pokémon est trouvé dans la base
   */
  const fetchPokemon = async () => {
    /** @type {number} variable qui appelle un nombre au hasard d'un numéro de Pokémon dans l'API afin de générer un nom de Pokémon*/
    const pokedexNum = Math.floor(Math.random() * 897);
    /** @type {string} variable qui correspond au nom du Pokémon trouvé dans la base de l'API*/
    let foundPokemon = '';
    /** @type {string} variable qui récupère les infos des Pokémon à partir du fichier json */
    let jsonPokemon = '';
    /** @type {object} variable qui crée un objet avec les infos des Pokémon*/
    const pokeInfo = {};

    try {
      foundPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonPokemon.species.name)
          .slice(1, jsonPokemon.species.name.length)
          .toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = 'No Pokémon found...';
    }

    if (pokeP.innerText !== '') {
      pokeP.innerText = '';
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };

  /**
   * Fonction asynchrone qui permet de  générer aléatoirement la capacité d'un pokemon dans l'API et 
   * d'afficher la capacité du Pokémon sur la page HTML si la capacité est trouvée dans la base.
   */
  const fetchPokemonAbilities = async () => {
    /** @type {number} variable qui permet de générer aléatoirement un numéro de Pokémon qui permettra ensuite de trouver et afficher sa capacité*/
    const pokedexNum = Math.floor(Math.random() * 266);
    /** @type {string} variable qui correspond à la capacité trouvée du Pokémon*/
    let foundAbilities = '';
    /** @type {string} variable qui correspond à l'id de l'élément html qui correspond la capacité du pokémon */
    const pokeAbility = document.getElementById('pokeAbility');
    /** @type {string} variable qui permet d'utiliser les capacités des Pokémon stockées à partir du fichier json*/
    let jsonAbilities = {};
    /** @type {string} variable qui correspond à la capacité du Pokémon à afficher sur la page html*/
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

  /**
   * Fonction qui permet de trouver / générer le nom d'un Pokémon au clic.
   *
   */
  const invoquePokemon = () => {
    /** @type {string} */
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Fonction qui permet de générer une capacité du pokemon au clic sur le bouton de l'utilisateur.
   *
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    pokeDiv.appendChild(this.pokeAbility);
  };

   /**
   * Fonction IIFE qui exécute les 2 fonctions qui permettent de trouver les pokemons ainsi que leurs capacités
   * au clic sur le bouton de l'utilisateur.
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});

