import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AddDeck from './AddDeck'
import Deck from './Deck'
import AddCard from './AddCard'
import CardView from './CardView'
import DeckList from './DeckList'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';




function HomeScreen() {
  return (
    <View >
      <DeckList/>
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

function AddCardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <AddCard/>
    </View>
  );
}


function CardViewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
    <CardView/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();


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
