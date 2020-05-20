import React, { Component } from 'react';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
   container: {
      backgroundColor: '#ff7f50',
      height: 800,
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 150,
   },

   cardName : {
     margin: 15,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 30,
   },


   input: {
      margin: 20,
      height: 50,
      padding: 10,
      borderColor: '#7a42f4',
      borderWidth: 1,
      borderRadius:5,
      backgroundColor: '#ffffff'

   },
   submitButton: {
      backgroundColor: '#000000',
      padding: 15,
      margin: 25,
      height: 50,
      borderRadius:5,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 120,
      justifyContent : "center",
   }
});
