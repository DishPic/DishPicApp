import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class RestaurantSelectionScreen extends Component {
  static navigationOptions = {
    title: 'Restaurant',
  };
  render() {
    return (
      <View>
        <Text>Restaurant Selection Screen</Text>
        <Text>Restaurant Selection Screen</Text>
        <Text>Restaurant Selection Screen</Text>
        <Text>Restaurant Selection Screen</Text>
        <Text>Restaurant Selection Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('dishDefinition')}
        />
      </View>
    );
  }
}

export default RestaurantSelectionScreen;
