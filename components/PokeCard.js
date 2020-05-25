
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

  pokemon.types.forEach(element => {
    if(element.slot === 1)
      type = element.type.name
  })

  return ( 
      <Card borderRadius={15} marginTop= {30} containerStyle={{backgroundColor: typeColors[type], opacity: 0.6}}>
              <View style={styles.container} >
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
                                  <Text key={type.type.name} style={{ backgroundColor: typeColors[type.type.name] }}>
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
    flexDirection: 'row',   
  },
  image: {
    position: 'absolute',
    left:0,
    bottom:10,
    width: 150,
    height: 150
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default PokeCard;
