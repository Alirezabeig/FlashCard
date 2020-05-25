import React, { Component} from 'react';
import {useState} from 'react';
import {View, Text, Alert, TextInput,Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'
import {connect} from 'react-redux';
import {deleteDeck} from './actions/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select';
import {Card} from 'react-native-paper'
import {styles} from './styles/DeckStyles'
import {Overlay } from 'react-native-elements';
import Modal from 'react-native-modal';

class Deck extends Component {


  static navigationOptions = ({ route }) => ({
      name: route.params.name,
    });

  deleteThisDeck() {

    Alert.alert(
      "Delete This Deck",
      "Are you sure?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },

        {
           text: "Yes", onPress: () => this.props.deleteDeck(deckId),
        }
      ],
      {cancelable: false}
    );



      const deckId = this.props.deck.id//const {deckId}= this.props;
        //this.props.deleteDeck(deckId);
        this.props.navigation.navigate('Home', {
        deckId: deckId,

     })

    }




     AddCard = ()=> {
     this.props.navigation.navigate(
       'AddCard',
       {
        deckId:deck.id
            }
     );
    }


  render (){

    const {navigation, deck}=this.props;
      console.log("\n\n deck in Deck-Details: => ", deck);

      if (!deck) {
    return null;
  }

    return (

      <View  style= {styles.container}>

        <Card style={styles.card10}>
          <Text style={{marginBottom: 20, textAlign: 'center', fontSize:30}}>
          {deck.name}

          </Text>

              <Text style={{marginBottom: 10, textAlign: 'center'}}>
                  {this.props.deck.cards && (this.props.deck.cards.length>0 || this.props.deck.cards.length==0)
                    ?`There are ${this.props.deck.cards.length} Cards in ${this.props.deck.name} Deck.`
                    : `There is 0 Cards in this Deck.`
                  }
              </Text>



      <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{
            this.props.navigation.navigate(
            'AddCard',
            {
              deckId: deck.id,
            }
          );
        }
      }
          >
          <Text style = { styles.submitButtonText}> Add Card </Text>
      </TouchableOpacity>

    <View>
      {this.props.deck.cards && this.props.deck.cards.length>0
        ? (
          <TouchableOpacity
              style={styles.submitButton2}
              onPress={()=>{
                this.props.navigation.navigate(
                'Quiz',
                {deck, deckId: deck.id,}
              );
            }
          } >
          <Text style = {styles.submitButtonText2}> Start Quiz </Text>
            </TouchableOpacity>
          ): <Text style={styles.tt}>Add Cards so you can quize yourself.</Text>
          }
      </View>


      <Button
        onPress={() => {
          this.deleteThisDeck();
        }}
        title="Delete Deck"
        />




        </Card>
      </View>

    )
  }
}

const mapStateToProps = (state, { route }) => ({
  deck: state[route.params.deckId]

});

export default connect(mapStateToProps,{deleteDeck})(Deck)
