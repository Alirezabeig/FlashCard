import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'

export const styles = StyleSheet.create({
   container: {
      paddingTop: 5,
      height: 700,
      backgroundColor: '#ff7f50',
   },
   card: {
     padding: 10,
     margin: 10,
     backgroundColor:'#faebd7',
     borderRadius: 20,
   },

   card10: {
     margin: 10,
     backgroundColor: '#f0f8ff',
     borderRadius: 5,
     padding: 20,
     shadowColor: 'rgba(0,0,0,0.5)',
     shadowOffset: {
       width: 1,
       height: 4,
     },
     shadowOpacity: 0.5,
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
     marginLeft: 20,
     height: 40,
     fontSize: 15,
     marginTop: 10,
     opacity: .5,
     borderRadius:20,

   },
   iftexts : {
     margin: 10,
     marginLeft: 15,
     marginBottom:50,
     height: 50,
     fontSize: 30,
     marginTop: 30,
     borderRadius:20,

   },

   deleteButton:{
     marginTop:100,
   },

   submitButton: {

      backgroundColor: '#ffa07a',
      padding: 15,
      margin: 15,
      marginBottom: 10 ,
      height: 50,
      borderRadius:5,
   },

   submitButton2: {

      backgroundColor: '#20b2aa',
      padding: 15,
      margin: 15,
      height: 50,
      marginBottom: 50 ,
      borderRadius:5,
      fontSize:10,
      marginBottom:100,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 95,
      justifyContent : "center",
   },
   submitButtonText2:{
      color: 'black',
      marginLeft: 95,
      justifyContent : "center",

   },
   tt:{
      color: 'black',
      marginLeft: 30,
      marginBottom: 80,
      marginTop:10,
      justifyContent : "center",
   }
});
