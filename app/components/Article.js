import React, { PropTypes, Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import unescape from 'lodash.unescape';

import HtmlRender from 'react-native-html-render';

class Article extends Component {
  componentWillMount() {
    const { route, loadArticle } = this.props;
    loadArticle(route.article.newsId);
  }

  render() {
    const { article } = this.props;

    if (article.loading) {
      return (
        <View>
          <Text>loading</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titleText}>{article.title}</Text>
        </View>
        <View style={styles.content}>
          <HtmlRender
            onLinkPress={() => {}}
            value={unescape(article.content)}
          />
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
    padding: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600'
  }
});

export default Article;
