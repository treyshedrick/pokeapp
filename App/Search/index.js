import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokeInfo from '../PokeInfo';
import {Text} from 'react-native';

const Search = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokedex/5')
      .then(response => {
        setPokemonList(
          response.data.pokemon_entries.map(pokemon => {
            return {
              id: pokemon.entry_number,
              name: pokemon.pokemon_species.name,
            };
          }),
        );
        console.log('Called Pokemon API');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (pokemonSelected == null && pokemonList.length > 0) {
      const randmNum = Math.floor(Math.random() * 151);
      setSelectedPokemon(pokemonList[randmNum].name);
    }
    if ((pokemonSelected != null && pokemonInfo == null) || searchClick) {
      console.log('Should only occur on search');
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`)
        .then(response => {
          setPokemonInfo(response.data);
        })
        .catch(err => {
          console.log(err);
        })
        .then(setSearchClick(false));
    }
  }, [pokemonSelected, pokemonList, pokemonInfo, searchClick]);

  if (pokemonInfo) {
    return <PokeInfo info={pokemonInfo} />;
  }

  return <Text>Loading. . .</Text>;
};

export default Search;
