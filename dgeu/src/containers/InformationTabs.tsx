import { connect } from 'react-redux';
import { IInitialState } from '../state';
import InformationTabs from '../components/InformationTabs';
import { bindActionCreators, Dispatch } from 'redux';
import { acSetActiveTab } from '../actions';

const mapStateToProps = (state: IInitialState) => ({
  title: state.title,
  subtitle: state.subtitle,
  author: state.author,
  authorUrl: state.authorUrl,
  collectionName: state.collectionName,
  collectionUrl: state.collectionUrl,
  numberOpinions: state.numberOpinions,
  rating: state.rating,
  activeTab: state.activeTab
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      acSetActiveTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(InformationTabs);