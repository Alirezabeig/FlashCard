import React, { Component} from 'react';
import {useState} from 'react';
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
import {Overlay } from 'react-native-elements';
import Modal from 'react-native-modal'


class Deck extends Component {
  
  const [isModalVisible, setModalVisible] = useState(false);

  static navigationOptions = ({ route }) => ({
      name: route.params.name,
    });

  deleteThisDeck() {
      const {deck} =this.props;
      const name = deck.name;
      const deckId = deck.id;        //const {deckId}= this.props;
        this.props.deleteDeck(deckId);
        this.props.navigation.navigate('Home', {
        deckId: deckId,
       name: name
     })

    }

    toggleModal(){
        const toggleModal= () =>{
          setModalVisible(!isModalVisible);
        };
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


      <>
        <View>
          <Button title="Show modal" onPress={()=>this.toggleModal()} />
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
             <Button title="Hide modal" onPress={()=>toggleModal()} />
      //notice here that if the purpose of the button is to just toggle then you might not necessarily need the function toggleModal you could just do the inverting of the state variable like  setModalVisible(!isModalVisible);
          </View>
        </Modal>
      </>

        </Card>
      </View>

    )
  }
}

const mapStateToProps = (state, { route }) => ({

  deck: state[route.params.deckId]
});


export default connect(mapStateToProps,{deleteDeck})(Deck)
