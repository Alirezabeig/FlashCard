import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'


AddCard = ()=> {

}


StartQuiz=()=> {

}

Remove =() => {
}

const Stack = createStackNavigator();



export default class AddDeck extends Component {
  render (){
    return (


      <View>

      <KeyboardAvoidingView style={{
              flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
              }}/>

        <Text style= {styles.deckName}>
          Deck Name
        </Text>

        <Text style={styles.text}>
          Number of cards
        </Text>


      <TouchableOpacity
      style={styles.submitButton}
      onPress={this.AddCard}>
      <Text style = { styles.submitButtonText}> Add Card </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.submitButton}
      onPres={this.StartQuiz}>
      <Text style = { styles.submitButtonText}> Start Quiz </Text>
      </TouchableOpacity>

      <Button
          title="Delete Deck"
          onPress={this.remove}
        />





      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   deckName : {
     margin: 5,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 20,
   },

   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 15,
     marginTop: 10,
     opacity: .5,
     borderRadius:20,

   },

   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 15,
      height: 50,
      borderRadius:20,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
