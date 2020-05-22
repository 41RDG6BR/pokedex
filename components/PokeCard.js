
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import typeColors from '../helpers/typeColors'

import { Card, ListItem, Button, Icon, Input } from 'react-native-elements'

function PokeCard({ pokemon }) {
  // console.log(pokemon)
  return ( 
<Card borderRadius={15}>
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.image}
                    source={{ uri: pokemon.sprites.front_default }}
                />
                
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.titleText}>
                    {pokemon.name}
                </Text>
                 <View style={{flexDirection: 'row' }}>
                {
                    pokemon.types.map(type => {
                        return (
                            <Text style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </Text>
                        )
                    })
                }
            </View>
                <Text>
                   Weight: {pokemon.weight}
                </Text>
                <Text>
                   Height: {pokemon.height}
                </Text>
                <Text>
                   Ability: {pokemon.abilities[0].ability.name}
                </Text>
            </View>
        </View> 
</Card>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default PokeCard;
