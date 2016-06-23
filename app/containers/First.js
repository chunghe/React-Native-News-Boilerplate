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
    onButtonPress: () => {
      dispatch(navigatePush('Second'));
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstScreen);
