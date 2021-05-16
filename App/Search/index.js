import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import PokeInfo from '../PokeInfo';
import {Text, View, FlatList, Button} from 'react-native';
import {SearchBar, ListItem} from 'react-native-elements';

const Search = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const [pokeSearch, setPokeSearch] = useState('');
  const [pokeSearchArr, setPokeSearchArr] = useState([]);
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokedex/5')
      .then(response => {
        const pokeArr = response.data.pokemon_entries.map(pokemon => {
          return {
            id: pokemon.entry_number,
            title: pokemon.pokemon_species.name,
          };
        });
        setPokemonList(pokeArr);
        setPokeSearchArr(pokeArr);
        console.log('Called Pokemon API');
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (pokemonSelected == null && pokemonList.length > 0) {
      const randmNum = Math.floor(Math.random() * 151);
      setSelectedPokemon(pokemonList[randmNum].title);
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

  const handleOnSelect = item => {
    setSelectedPokemon(item.title);
    setSearchClick(true);
  };

  const searchFilter = text => {
    setPokeSearch(text.toLowerCase());
    const newData = pokemonList
      .filter(item => {
        return item.title.indexOf(text.toLowerCase()) > -1;
      })
      .slice(0, 5);
    setPokeSearchArr(newData);
    console.log(text.length);
  };

  if (pokemonInfo) {
    return (
      <View>
        <FlatList
          data={pokeSearchArr.slice(0, 5)}
          renderItem={({item}) => (
            <Button title={item.title} onPress={() => handleOnSelect(item)} />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <SearchBar
              placeholder="Search for a pokemon..."
              onChangeText={text => searchFilter(text)}
              value={pokeSearch}
            />
          }
        />
        <PokeInfo info={pokemonInfo} />
      </View>
    );
  }

  return <Text>Loading. . .</Text>;
};

export default Search;
