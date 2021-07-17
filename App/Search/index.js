import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokeInfo from '../PokeInfo';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {SearchBar, Button} from 'react-native-elements';
import styles from './styles';

const Search = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setSelectedPokemon] = useState(null);
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const [pokeSearch, setPokeSearch] = useState('');
  const [pokeSearchArr, setPokeSearchArr] = useState([]);
  const [searchClick, setSearchClick] = useState(false);

  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
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
        isLoading(false);
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
      isLoading(true);
      setPokeSearch('');
      console.log('Should only occur on search');
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`)
        .then(response => {
          setPokemonInfo(response.data);
          isLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
        .then(setSearchClick(false));
    }
  }, [pokemonSelected, pokemonList, pokemonInfo, searchClick]);

  const handleOnSelect = item => {
    isLoading(true);
    setSelectedPokemon(item.title);
    setSearchClick(true);
    setPokeSearchArr([]);
  };

  const searchFilter = text => {
    setPokeSearch(text.toLowerCase());
    const newData = pokemonList
      .filter(item => {
        return item.title.indexOf(text.toLowerCase()) > -1;
      })
      .slice(0, 5);
    if (text.length === 0) {
      setPokeSearchArr([]);
    } else {
      setPokeSearchArr(newData);
    }
  };

  if (pokemonInfo) {
    return (
      <View style={styles.main}>
        <View
          style={styles.search}
          height={pokeSearchArr.length > 0 ? '100%' : null}>
          <FlatList
            data={pokeSearchArr}
            renderItem={({item}) => (
              <Button
                buttonStyle={{height: 50}}
                titleStyle={{fontSize: 25, color: 'black'}}
                type="clear"
                title={item.title}
                onPress={() => handleOnSelect(item)}
              />
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <SearchBar
                containerStyle={styles.searchBar}
                placeholder="Search for a pokemon..."
                onChangeText={text => searchFilter(text)}
                value={pokeSearch}
                onClear={() => setPokeSearchArr([])}
                lightTheme
                round
              />
            }
          />
        </View>
        {!loading ? (
          <PokeInfo info={pokemonInfo} />
        ) : (
          <View style={styles.loadingScreen}>
            <ActivityIndicator size="large" color="red" />
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.main}>
        <View style={styles.loadingScreen}>
          <ActivityIndicator size="large" color="red" />
        </View>
      </View>
    );
  }
};

export default Search;
