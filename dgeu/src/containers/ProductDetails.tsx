import { connect } from 'react-redux';
import { IInitialState } from '../state';
import ProductDetails from '../components/ProductDetails';
import { Dispatch, bindActionCreators } from 'redux';
import { acSetActiveTab } from '../actions';

const mapStateToProps = (state: IInitialState) => ({
  pages: state.pages,
  isbn10: state.isbn10,
  isbn13: state.isbn13,
  dimensions: state.dimensions,
  weight: state.weight,
  publisher: state.publisher,
  languaje: state.languaje,
  numberOpinions: state.numberOpinions,
  rating: state.rating
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      acSetActiveTab
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);