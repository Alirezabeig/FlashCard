import React, { Component } from 'react';
import {View, Text, Platform, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {saveDeckTitle} from './utils/api'



export default class AddDeck extends Component {

  state= {
    titleText: '',
  };



  Submit = () => {
    if (this.state.titleText) {
      const {titleText} = this.state;
      saveDeckTitle(titleText);
      this.setState({
       titleText: ''
     });
     this.props.navigation.navigate('Home')
   }

  };


  render (){
    return (

      <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >

        <Text style={styles.text}>
        What is the title on your new deck?
        </Text>

          <TextInput
          style={styles.input}
          placeholder="    Enter Deck Name"
          onChangeText = {titleText => this.setState ({ titleText}) }
          value= {this.state.titleText }
        />

      <TouchableOpacity
        style={styles.submitButton}
        onPress= {this.Submit}>
        <Text style = { styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
   container: {
      flex:1
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
      height: 50,
      borderColor: '#7a42f4',
      borderWidth: 1,

      borderRadius:20,

   },
   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 20,
      height: 50,
      borderRadius:20,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
