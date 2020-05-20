import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {receiveDecks} from './actions/index';
import {Card} from 'react-native-paper';
import { retrieveDecks } from "./utils/api";
import pluralize from "pluralize";


class DeckList extends Component {

  state = {
      ready: false
    };

    componentDidMount() {
      retrieveDecks()
        .then(decks => this.props.receiveDecks(decks))
        .then(() => {
          this.setState({ ready: true });
        });
    }


render() {
  const { decks, navigation } = this.props;

  const SummaryCard = ({ id, name, cardCount, navigation }) => (
  <TouchableOpacity
    style={styles.card10}
    onPress={() =>
      navigation.navigate("Deck", { deckId: id, name: name })
    }
  >
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text2}>{`${cardCount} ${pluralize(
      "Card",
      cardCount
    )}`}</Text>
  </TouchableOpacity>
);

return Object.values(decks).length > 0 ? (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <SummaryCard
              id={item.id}
              name={item.name}
              cardCount={item.cards.length}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    ) : (
      <View style={styles.blank}>
        <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>
      </View>
    );
  }
}


const mapStateToProps = decks => ({
  decks
});

const mapDispatchToProps = dispatch => ({
  receiveDecks: decks => dispatch(receiveDecks(decks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

const styles = StyleSheet.create({
   container: {

     backgroundColor: '#ff7f50',
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
