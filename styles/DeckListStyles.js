import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {

     backgroundColor: '#ff7f50',
   },

   card: {
     padding: 10,
     margin: 2,
     backgroundColor:'#a52a2a',
     borderRadius:4,
   },

   blank:{
     color: '#ffffff',
     marginTop:100,
     marginLeft:50,
     margin: 5,

   },
   cardName : {
     margin: 5,
     height: 40,
     fontSize: 20,
   },
   card10: {
     margin: 10,
     height: 100,
     backgroundColor: '#ffffff',
     borderRadius: 5,
     padding: 20,
     shadowColor: 'rgba(0,0,0,0.5)',
     shadowOffset: {
       width: 1,
       height: 4,
     },
     shadowOpacity: 0.5,
   },


   input: {
      margin: 20,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1

   },
   submitButtonCorrect: {

      backgroundColor:'#32cd32',
      padding: 15,
      width: 320,
      marginLeft: 25,

      height: 50,
      borderRadius:20,
   },

   submitButtonIncorrect:{
     backgroundColor:'#800000',
     margin:20,
     padding: 15,
     width: 320,
     marginLeft: 25,
     height: 50,
     borderRadius:20,
   },

   submitButtonText:{
      color: 'white',
      marginLeft: 115,
      justifyContent : "center",
   },

   text:{
     fontSize: 25,
     margin:10,

   },

   text2:{
     fontSize: 12,
     margin:0,
     marginLeft: 200,
     marginBottom: 10,

   },
});
