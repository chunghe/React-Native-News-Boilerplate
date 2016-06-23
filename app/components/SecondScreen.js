import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './NavButton';

class SecondScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Second Screen</Text>
        <NavButton destLabel="Third" buttonHandler={this.props.onButtonPress} />

        <View style={styles.spacer}>
          <NavButton destLabel="Modal" buttonHandler={this.props.onModalButtonPress} />
        </View>
      </View>
    );
  }
}

SecondScreen.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  onModalButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D690CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30
  },
  spacer: {
    marginTop: 20,
    alignSelf: 'stretch'
  }
});

export default SecondScreen;
