import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddDeck from './AddDeck'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View >
      <Text style={{ fontSize:20, marginTop: 20 }}>
      Good morning</Text>
    </View>
  );
}

function AddDeckScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <AddDeck/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Deck" component={AddDeckScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
