import { connect } from 'react-redux';
import Articles from '../components/Articles';
import { IInitialState } from '../state';

const mapStateToProps = (state: IInitialState) => ({
  articles: state.othersCustomersArticles
});

export default connect(mapStateToProps, {})(Articles);