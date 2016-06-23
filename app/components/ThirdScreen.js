import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './NavButton';

const ThirdScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third Screen</Text>

      <NavButton destLabel="Home" buttonHandler={props.onButtonPress} />
    </View>
  );
};

ThirdScreen.propTypes = {
  onButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79BD8F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30
  }
});

export default ThirdScreen;
