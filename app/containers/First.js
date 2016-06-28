import { connect } from 'react-redux';

import FirstScreen from '../components/FirstScreen';
import { navigatePush } from '../redux/modules/routing';
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
    handleNewsPress: (article) => {
      dispatch(navigatePush({ key: 'Article', article }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);
