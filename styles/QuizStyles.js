import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

export const styles = StyleSheet.create({

    numberRemaining: {
      flex:3,
      width: '100%',
      height: 80,
      padding: 20,
      backgroundColor: '#f0f8ff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', //Here is the trick
      bottom: -230,

    },

    text : {
      margin: 10,
      marginLeft: 20,
      height: 40,
      fontSize: 15,
      marginTop: 10,
      opacity: .5,
      borderRadius:20,

    },

    cards:{
      fontSize: 40,
      marginTop: 30,
    },

    buttonStyle1: {

       backgroundColor: '#20b2aa',
       padding: 15,
       margin:15,
       height: 50,
       borderRadius:5,
       flex: 2,
       flexDirection: 'row',
       justifyContent: 'space-between',

    },

    buttonStyle10: {

       backgroundColor: '#ffa07a',
       padding: 15,
       margin: 5,
       height: 50,
       borderRadius:5,
       flex: 2,
       flexDirection: 'row',
       justifyContent: 'space-between',

    },

    buttonStyle2: {

       backgroundColor: '#ffa07a',
       padding: 15,
       margin: 15,
       height: 50,
       borderRadius:5,
    },

    buttonStyle3: {

       backgroundColor: '#20b2aa',
       padding: 15,
       margin: 15,
       height: 50,
       borderRadius:5,
    },

    card10: {
      margin: 10,
      backgroundColor: '#f0f8ff',
      borderRadius: 5,
      padding: 15,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 1,
        height: 4,
      },
      shadowOpacity: 0.5,
    },

    buttonStyle4: {

       backgroundColor: '#20b2aa',
       padding: 15,
       margin: 15,
       height: 50,
       borderRadius:20,
    },
    submitButtonText:{
       color: 'white',
       marginLeft: 95,
       justifyContent : "center",
    },
    submitButtonText1:{
       color: 'white',
       marginLeft: 15,
       justifyContent : "center",
    },

    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop:50,
      marginBottom:50,
      backgroundColor: '#F5FCFF',
    },
    flipCard: {
      width: 360,
      height: 200,
    },
    card: {
      width: 340,
      height: 200,
      padding: 50,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      marginLeft:15,
      margin:20,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      textAlign: 'center',
      fontSize: 20,
      padding:40,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    label1: {
      textAlign: 'center',
      fontSize: 20,
      padding:50,
      fontFamily: 'System',
      color: '#000000',
      backgroundColor: 'transparent',
    },

    result: {
      width: 340,
      height: 200,
      padding: 10,
      backgroundColor: '#F5FCFF',
      borderRadius: 5,
      marginLeft:15,
      margin:20,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
    },

    submitButtonTextResult: {
      color: 'white',
      marginLeft: 122,
      justifyContent : "center",
    },

    resultText: {
      marginLeft: 85,
      marginTop: 50,
      fontSize: 20,
      color: 'black',
      borderRadius:20,
    },
    cont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }


});
