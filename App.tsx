import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AddDeck from './AddDeck'
import Deck from './Deck'
import Card from './Card'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

function DeckScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Deck/>
    </View>
  );
}

function CardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <Card/>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >

      <Tab.Navigator >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />

        <Tab.Screen
          name="Add Deck"
          component={AddDeckScreen}
          options={{
          tabBarLabel: 'Add Deck',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}  />
        <Tab.Screen name="Deck" component={DeckScreen} />
        <Tab.Screen name="Cards" component={CardScreen} />
      </Tab.Navigator>
    </NavigationContainer>



  );
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#633689',
    fontSize: 50,
  },

});
