import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IInitialState } from '../state';
import MainProductInformation from '../components/MainProductInformation';
import { acSetProductSelected } from '../actions';

const mapStateToProps = (state: IInitialState) => ({
  freeDelivery: state.freeDelivery,
  fastDelivery: state.fastDelivery,
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