import React, { useState, useEffect } from "react";
import { Text, View } from 'react-native' 
import { SearchBar } from 'react-native-elements';

function Search(props) {
  return ( 
    <View>
        <SearchBar
            onChangeText={props.onchange}
            lightTheme
            placeholder="Busca"
            value={props.value}
        />
    </View>
  );
}

export default Search;
    