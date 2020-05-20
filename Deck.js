import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'
import {connect} from 'react-redux';
import {deleteDeck} from './actions/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import Select from 'react-select';
import {Card, Button} from 'react-native-paper'
import {styles} from './styles/DeckStyles'


class Deck extends Component {


  static navigationOptions = ({ route }) => ({
      name: route.params.name,
    });

  deleteThisDeck() {
    <TextInput
     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     onChangeText={text => onChangeText(text)}
     placeholder={"Enter yes or Yes to delete deck"}

   />

        const deckId = this.props.deckId;
        //const {deckId}= this.props;
        this.props.deleteDeck(deckId);
        this.props.navigation.navigate('Home')

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
        icon="delete"
        mode="outlined"
        onPress={() => this.deleteThisDeck()}
        >
        Delete Deck
      </Button>

        </Card>
      </View>

    )
  }
}
const mapStateToProps = (state, { route }) => ({

  deck: state[route.params.deckId]
});


export default connect(mapStateToProps,{deleteDeck})(Deck)
