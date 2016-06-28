import React, { PropTypes, Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

class Article extends Component {
  componentWillMount() {
    const { route, loadArticle } = this.props;
    loadArticle(route.article.newsId);
  }

  render() {
    const { article } = this.props;
    console.log('article', article);

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>{article.title}</Text>
        </View>
        <View>
          <Text>{article.content}</Text>
        </View>
      </ScrollView>
    );
  }
}

Article.propTypes = {
  route: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  loadArticle: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default Article;
