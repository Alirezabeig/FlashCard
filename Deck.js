import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './app'
//import {} from './utils/helper'
import {connect} from 'react-redux';
import {getDeckDetails, deleteDeck} from './actions/index';
import { Card } from 'react-native-elements';


AddCard = ()=> {
 this.props.navigation.navigate(
   'AddCard',
   {
    navTitle: this.props.title,
    title: this.props.title
        }
 );
}




class Deck extends Component {

  componentDidMount() {
    this.props.getDeckDetails(this.props.route.params.entryId);
  }


  deleteThisDeck() {
     const title = this.props.title;
     this.props.deleteDeck(title);

   }

  static navigationOptions = ({ navigation }) => {
      return {
        title: navigation.state.params.navTitle
      }
    };




  render (){
    return (


      <View >

        <Card title={this.props.title}  >

              <Text style={{marginBottom: 10, textAlign: 'center'}}>
                  {this.props.questions ?this.props.questions.length : 0} cards
                </Text>

        <Text style={styles.text}>
          Number of cards
        </Text>


      <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{
            this.props.navigation.navigate(
            'AddCard',
            {
              navTitle: this.props.title,
              title:this.props.title,
            }
          );
        }
      }
          >
          <Text style = { styles.submitButtonText}> Add Card </Text>
      </TouchableOpacity>


      <TouchableOpacity
          style={styles.submitButton}
          onPress={()=>{
            this.props.navigation.navigate(
            'Quiz',
            {
            navTitle: this.props.title,
            questions: this.props.questions}
          );
        }
      } >
      <Text style = { styles.submitButtonText}> Start Quiz </Text>
      </TouchableOpacity>

      <Button
          title="Delete Deck"
          onPress={() => this.deleteThisDeck()}
        />
        </Card>
      </View>

    )
  }
}
const mapStateToProps = state => {
  const { title, questions } = state.deckDetail ? state.deckDetail : ('', []);
  return { title, questions };
};


export default connect(mapStateToProps,{ deleteDeck, getDeckDetails})(Deck)

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   card: {
     padding: 50,
     margin: 50,
     backgroundColor:'#a52a2a'
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

   submitButton: {

      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 15,
      height: 50,
      borderRadius:20,
   },
   submitButtonText:{
      color: 'white',
      marginLeft: 95,
      justifyContent : "center",
   }
});
