import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IInitialState } from '../state';
import MainProductInformation from '../components/MainProductInformation';
import { acSetProductSelected } from '../actions';

const mapStateToProps = (state: IInitialState) => ({
  // title: state.title,
  // subtitle: state.subtitle,
  // author: state.author,
  // authorUrl: state.authorUrl,
  // collectionName: state.collectionName,
  // collectionUrl: state.collectionUrl,
  freeDelivery: state.freeDelivery,
  fastDelivery: state.fastDelivery,
  // numberOpinions: state.numberOpinions,
  // rating: state.rating,
  description: state.description,
  moreDescription: state.moreDescription,
  priceFormats: state.priceFormats
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      acSetProductSelected
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainProductInformation);