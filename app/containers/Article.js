import { connect } from 'react-redux';

import Article from '../components/Article';
import { fetchArticle } from '../redux/modules/article';


const mapStateToProps = ({ article }) => {
  return {
    article
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadArticle: (newsId) => {
      dispatch(fetchArticle(newsId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
