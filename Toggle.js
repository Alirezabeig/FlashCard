import React, { Component} from 'react';
import {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'
import {connect} from 'react-redux';
import {deleteDeck} from './actions/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select';
import {Card, Button} from 'react-native-paper'
import {styles} from './styles/DeckStyles'
import {Overlay } from 'react-native-elements';
import Modal from 'react-native-modal'

export function Toggle() {

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal= () =>{
    setModalVisible(!isModalVisible);
  };
return (
<>
  <View>
    <Button title="Show modal" onPress={()=>this.toggleModal()} />
  </View>
  <Modal isVisible={isModalVisible}>
    <View style={{flex: 1}}>
      <Text>Hello!</Text>
       <Button title="Hide modal" onPress={()=>toggleModal()} />
//notice here that if the purpose of the button is to just toggle then you might not necessarily need the function toggleModal you could just do the inverting of the state variable like  setModalVisible(!isModalVisible);
    </View>
  </Modal>
</>
)

}
