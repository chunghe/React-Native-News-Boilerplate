import { connect } from 'react-redux';

import FirstScreen from '../components/FirstScreen';
// import { navigatePush } from '../redux/modules/routing';
import { fetchArticle } from '../redux/modules/article';
import { fetchArticles } from '../redux/modules/articles';


const mapStateToProps = ({ articles }) => {
  return {
    articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticles: () => {
      dispatch(fetchArticles());
    },
    handleNewsPress: (id) => {
      dispatch(fetchArticle(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);
