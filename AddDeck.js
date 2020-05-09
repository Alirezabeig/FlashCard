import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
//import {} from './utils/helper'


export default class AddDeck extends Component {



  render (){
    return (
      <View>
        <Text style={styles.text}>
        What is the title on your deck?
        </Text>
        <TextInput
        style={styles.input}
        placeholder="Deck Name"

      />
      <TouchableOpacity
      style={styles.submitButton}>
      <Text style = { styles.submitButtonText}> Submit </Text>

      </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 150,

   },
   input: {
      margin: 20,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1

   },
   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 25,
      height: 50,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
