import { connect } from 'react-redux';
import ReviewsInternationals from '../components/ReviewsInternationals';
import { IInitialState } from '../state';

const mapStateToProps = (state: IInitialState) => ({
  internationalReviews: state.internationalReviews
});

export default connect(mapStateToProps, {})(ReviewsInternationals);