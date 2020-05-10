import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AddDeck from './AddDeck'
import Deck from './Deck'
import AddCard from './AddCard'
import CardView from './CardView'
import Home from './Home'
import {Provider, connect} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './Reducers/index';

const Tab = createBottomTabNavigator();
function Tabs (){
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }} />

      <Tab.Screen
        name="Add Deck"
        component={AddDeck}
        options={{
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus" color={color} size={size} />
        ),
      }}  />
      <Tab.Screen name="Deck" component={Deck}/>

    </Tab.Navigator>


  )
}

const Stack = createStackNavigator();

export default function App() {

  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Tabs}/>
              <Stack.Screen name="Deck" component={Deck}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>


    );
  }


const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#633689',
    fontSize: 50,
  },

});
