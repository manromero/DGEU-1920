import { connect } from 'react-redux';
import Articles from '../components/Articles';
import { IInitialState } from '../state';

const mapStateToProps = (state: IInitialState) => ({
  articles: state.undiscoveredArticles
});

export default connect(mapStateToProps, {})(Articles);