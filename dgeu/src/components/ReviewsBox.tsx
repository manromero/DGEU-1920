import React from 'react';
import CustomerReviews from './CustomerReviews';
import CustomerImages from './CustomerImages';
import ReviewsMetions from './ReviewsMentions';
import ReviewsCustomers from '../containers/ReviewsCustomers';
import ReviewsInternationals from '../containers/ReviewsInternationals';

const ReviewsBox = () => {
  return (
    <div id="reviewsMedley">
      <CustomerReviews />
      <CustomerImages />
      <ReviewsMetions />
      <ReviewsCustomers />
      <ReviewsInternationals />
    </div>
  );
}

export default ReviewsBox;