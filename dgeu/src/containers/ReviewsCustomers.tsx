import { connect } from 'react-redux';
import ReviewsCustomers from '../components/ReviewsCustomers';
import { IInitialState } from '../state';

const mapStateToProps = (state: IInitialState) => ({
  customerReviews: state.customerReviews
});

export default connect(mapStateToProps, {})(ReviewsCustomers);