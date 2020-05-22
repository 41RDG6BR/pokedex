import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

function Navbar() {
    return (
        <View  style={{justifyContent: 'center', alignItems: 'center', padding: 50}}>
            <Text>
                Pokedéx
            </Text>
            <Text>
            Search pokemon by name
            </Text>
        </View>
    );
}

export default Navbar;
