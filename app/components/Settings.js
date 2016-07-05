import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>Settings Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});


export default Settings;
