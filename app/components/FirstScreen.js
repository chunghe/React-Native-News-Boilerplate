import React, { PropTypes, Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class FirstScreen extends Component {
  componentWillMount() {
    this.props.loadArticles();
  }

  renderArticle(article) {
    // console.log('article', article);
    return (
      <View style={styles.newsRow} key={article.newsId}>
        <Text>{article.title}</Text>
      </View>
    );
  }

  render() {
    console.log('render', this.props.articles);
    const { articles } = this.props;

    return (
      <ScrollView style={styles.container}>
        {Object.keys(articles).map(index => this.renderArticle(articles[index]))}
      </ScrollView>
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
    backgroundColor: '#fff'
  },
  newsRow: {
    padding: 20,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 30
  }
});

export default FirstScreen;
