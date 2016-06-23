import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavButton from './NavButton';

class FirstScreen extends Component {

  componentWillMount() {
    console.log('will mount');
    this.props.loadArticles();
  }

  render() {
    console.log('render', this.props.articles);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>First Screen</Text>
        <NavButton destLabel="Second" buttonHandler={this.props.onButtonPress} />
      </View>
    );
  }
}

FirstScreen.propTypes = {
  articles: PropTypes.object.isRequired,
  loadArticles: PropTypes.func.isRequired,
  onButtonPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F9CB2',
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

export default FirstScreen;
