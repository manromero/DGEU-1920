import React from 'react';
import CustomerReviews from './CustomerReviews';
import CustomerImages from './CustomerImages';
import ReviewsMetions from './ReviewsMentions';
import ReviewsCustomers from './ReviewsCustomers';
import ReviewsInternationals from './ReviewsInternationals';

const ReviewsBox = () => {
  return (
    <div id="reviewsMedley" data-hook="reviews-medley-widget" className="a-fixed-left-grid a-spacing-extra-large">
      <div className="a-fixed-left-grid-inner" style={{ paddingLeft: "300px" }}>
        <CustomerReviews />
        <div className="a-fixed-left-grid-col a-col-right" style={{ paddingLeft: "2.5%", float: "left" }}>
          <div className="a-row cm_cr_grid_center_container">
            <div className="a-fixed-right-grid-col cm_cr_grid_center_left" style={{ float: "left" }}></div>
            <div className="a-fixed-right-grid-col cm_cr_grid_center_right" style={{ float: "left" }}>
              <CustomerImages />
              <ReviewsMetions />
              <ReviewsCustomers />
              <ReviewsInternationals />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsBox;