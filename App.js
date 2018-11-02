import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainFlowRouting from './src/routing/TabNavigation/MainFlowRouting';
import LoggedOutFlowRouting from './src/routing/StackNavigation/LoggedOutFlowRouting';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isUserLoggedIn: true,
    };
  }

  render() {
    const { isUserLoggedIn } = this.state;

    return (
      <View style={styles.container}>
        {isUserLoggedIn ? <MainFlowRouting /> : <LoggedOutFlowRouting />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
