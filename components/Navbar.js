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
        <View style={{marginTop: 70}}>
            <Text style={{padding: 40, justifyContent: 'center', textAlign: 'center'}}>
                Pokedéx
            </Text>

        </View>
    );
}

export default Navbar;
