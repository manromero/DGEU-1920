import { connect } from 'react-redux';
import { IInitialState } from '../state';
import ProductDescription from '../components/ProductDescription';

const mapStateToProps = (state: IInitialState) => ({
  flapNote: state.flapNote,
  backCover: state.backCover,
  biography: state.biography
});

export default connect(mapStateToProps, {})(ProductDescription);