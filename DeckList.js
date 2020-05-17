import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {handleGetAllDecks} from './actions/index';
import {Card} from 'react-native-paper';
import { retrieveDecks } from "./utils/api";


class DeckList extends Component {

  state = {
      ready: false
    };

  componentDidMount(){
    retrieveDecks()
     .then(decks => this.props.handleGetAllDecks(decks))
     .then(() => {
       this.setState({ ready: true });
     });
  }


render() {
  const { decks, navigation } = this.props;

  const SummaryDeck = ({ id, title, navigation }) => (
  <TouchableOpacity
    style={styles.card10}
    onPress={() =>
      navigation.navigate("Deck", { deckId: deck.id, title: deck.title })
    }
  >
    <Text style={styles.cardName}>{title}</Text>
  </TouchableOpacity>
);


    return Object.values(decks).length > 0 ? (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <SummaryDeck
              id={item.id}
              title={item.title}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    ) : (
      <View>
        <Text style={styles.text}>No decks yet. Add A Deck.</Text>
      </View>
    );

}
}


function mapStateToProps(state) {
  return {
    decks: state,
  }
}
const mapDispatchToProps = dispatch =>({
  handleGetAllDecks:decks => dispatch(handleGetAllDecks(decks))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);

const styles = StyleSheet.create({
   container: {
      paddingTop: 0,
   },
   text : {
     margin: 10,
     marginLeft: 30,
     height: 40,
     fontSize: 20,
     marginTop: 150,

   },
   card: {
     padding: 10,
     margin: 2,
     backgroundColor:'#a52a2a',
     borderRadius:4,
   },
   cardName : {
     margin: 5,
     height: 40,
     fontSize: 20,
   },
   card10: {
     margin: 10,
     height: 80,
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

   tt:{
     fontSize: 30,
     margin:10,

   },

   tt2:{
     fontSize: 15,
     margin:10,

   },
});
