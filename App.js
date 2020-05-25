/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PokeCard from './components/PokeCard';
import NavBar from './components/Navbar'
import SearchBar from './components/Search'
import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'

import { getPokemon, getAllPokemon } from './services/pokemon';

let searched
function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [searchData, setSearchData] = useState(null)
  const [loading, setLoading] = useState(true);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0'

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  let allPokemon = []
  const loadPokemon = async (data) => {
      let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  const mySearch = (text) => {
    searched = text.toLowerCase()
      if(searched == ''){
      setSearchData(pokemonData)
    } else {
      let poke = pokemonData.filter(obj=>{
          return obj.name.toLowerCase().startsWith(searched)
      })
    setSearchData(poke)
    }
  }

  // const loadingText = (<Text>Carregando...</Text>)
  const realData = searchData || pokemonData
  return (
        <ScrollView>
            <View>
            <NavBar />
              <SearchBar onchange={mySearch} value={searched} />
                {realData.map((pokemon, i) => {
                  return <PokeCard key={i} pokemon={pokemon} />
                })}
              {/* {loadingText} */}
            </View>
        </ScrollView>
  );
};

export default App;
