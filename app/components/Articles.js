import React, { PropTypes, Component } from 'react';
import { Image, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Articles extends Component {
  componentWillMount() {
    this.props.loadArticles();
  }

  renderArticle(article) {
    const { handleNewsPress } = this.props;

    return (
      <TouchableOpacity
        key={article.newsId}
        style={styles.newsRow}
        onPress={() => { handleNewsPress(article); }}
      >
        <Text>{article.title}</Text>
        {!!article.hasCoverPhoto &&
          <Image
            resizeMode="cover"
            source={{ uri: article.coverSrc.m.src }}
            style={styles.img}
          />
          }
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
    height: 100,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  img: {
    height: 86,
    width: 86
  }
});

export default Articles;
