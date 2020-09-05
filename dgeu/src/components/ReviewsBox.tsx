import React from 'react';
import CustomerReviews from './CustomerReviews';
import CustomerImages from './CustomerImages';
import ReviewsMetions from './ReviewsMentions';
import ReviewsCustomers from '../containers/ReviewsCustomers';
import ReviewsInternationals from '../containers/ReviewsInternationals';

const ReviewsBox = () => {
  return (
    <div id="reviewsMedley">
      {/* <div > */}
      <CustomerReviews />
      {/* <div className="a-fixed-left-grid-col a-col-right" > */}
      {/* <div className="cm_cr_grid_center_container"> */}
      {/* <div > */}
      <CustomerImages />
      <ReviewsMetions />
      <ReviewsCustomers />
      <ReviewsInternationals />
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default ReviewsBox;