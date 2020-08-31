import { connect } from 'react-redux';
import { IInitialState } from '../state';
import ProductDetails from '../components/ProductDetails';

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

export default connect(mapStateToProps, {})(ProductDetails);