import { connect } from 'react-redux';
import { IInitialState } from '../state';
import BuyBox from '../components/BuyBox';

const mapStateToProps = (state: IInitialState) => ({
  priceFormats: state.priceFormats
});

export default connect(mapStateToProps, {})(BuyBox);