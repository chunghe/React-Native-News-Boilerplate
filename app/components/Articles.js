import React, { PropTypes, Component } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Articles extends Component {
  componentWillMount() {
    this.props.loadArticles();
  }

  renderArticle(article) {
    const { handleNewsPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.newsRow}
        key={article.newsId}
        onPress={() => { handleNewsPress(article); }}
      >
        <Text>{article.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { articles } = this.props;

    return (
      <ScrollView style={styles.container}>
        {Object.keys(articles).map(index => this.renderArticle(articles[index]))}
      </ScrollView>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.object.isRequired,
  loadArticles: PropTypes.func.isRequired,
  handleNewsPress: PropTypes.func.isRequired,
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

export default Articles;
