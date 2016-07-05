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
        key={article._id}
        onPress={() => { handleNewsPress(article); }}
      >
        <Text style={styles.title}>{article.title}</Text>
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
    flex: 1,
    height: 100,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingLeft: 18,
    paddingRight: 8,
    paddingBottom: 0,
    overflow: 'hidden'
  },
  title: {
    flex: 1,
  },
  img: {
    height: 86,
    width: 86
  }
});

export default Articles;
