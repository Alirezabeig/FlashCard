import React, { Component } from 'react';
import {View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback, Platform, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
//import {} from './utils/helper'
import {saveDeckTitle} from './utils/api'
import {getDeckDetails, addDeck} from './actions/index';
import {connect} from 'react-redux';

class AddDeck extends Component {

  state= {
    titleText: '',
  };



  Submit = () => {
    const title= this.props.title;
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
      behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>

              <Text style={styles.text}>
              What is the title on your new deck?
              </Text>

                <TextInput
                style={styles.input}
                placeholder=" Enter Deck Name"
                onChangeText = {titleText => this.setState ({ titleText}) }
                value= {this.state.titleText }
              />

            <TouchableOpacity
              style={styles.submitButton}
              onPress= {this.Submit}>
              <Text style = { styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            </View>
           </TouchableWithoutFeedback>

        </SafeAreaView>

    </KeyboardAvoidingView>

    )
  }
}
const mapStateToProps = state => {
  const { title } = state.deckDetail ? state.deckDetail : ('');
  return { title };
};

export default connect(mapStateToProps,{AddDeck})(AddDeck)

const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: '#f0f8ff',
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 100,

   },


   input: {
      margin: 20,
      height: 50,
      borderColor: '#7a42f4',
      borderWidth: 1,
      marginTop:20,
      padding:10,
      borderRadius:5,
      backgroundColor: '#ffffff'

   },


   submitButton: {

      backgroundColor:  '#000000',
      padding: 15,
      margin: 20,
      height: 50,
      marginTop:5,
      borderRadius:5,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
