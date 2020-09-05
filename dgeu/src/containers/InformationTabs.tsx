import { connect } from 'react-redux';
import { IInitialState } from '../state';
import InformationTabs from '../components/InformationTabs';

const mapStateToProps = (state: IInitialState) => ({
  title: state.title,
  subtitle: state.subtitle,
  author: state.author,
  authorUrl: state.authorUrl,
  collectionName: state.collectionName,
  collectionUrl: state.collectionUrl,
  numberOpinions: state.numberOpinions,
  rating: state.rating
});

export default connect(mapStateToProps, {})(InformationTabs);