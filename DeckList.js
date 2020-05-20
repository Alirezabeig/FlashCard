import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {receiveDecks} from './actions/index';
import {Card} from 'react-native-paper';
import { retrieveDecks } from "./utils/api";
import pluralize from "pluralize";
import {styles} from './styles/DeckListStyles'


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
        <Text style={{ fontSize: 20, color:"white" }}>You don't have any decks yet.</Text>
        <Text style={{ fontSize: 20, color:"white", margin: 50 }}>Add Decks Below!</Text>
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
