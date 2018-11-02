import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class RecommendationSentScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>
        <Text>Recommendation Sent Screen</Text>
        <Text>Recommendation Sent Screen</Text>
        <Text>Recommendation Sent Screen</Text>
        <Text>Recommendation Sent Screen</Text>
        <Text>Recommendation Sent Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}

export default RecommendationSentScreen;
