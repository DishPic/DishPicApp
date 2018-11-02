import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class FriendsListScreen extends Component {
  static navigationOptions = {
    title: 'Friends List',
  };
  render() {
    return (
      <View>
        <Text>Friends List Screen</Text>
        <Text>Friends List Screen</Text>
        <Text>Friends List Screen</Text>
        <Text>Friends List Screen</Text>
        <Text>Friends List Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('recommendationSent')}
        />
      </View>
    );
  }
}

export default FriendsListScreen;
