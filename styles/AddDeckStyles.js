import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: '#ff7f50',
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
