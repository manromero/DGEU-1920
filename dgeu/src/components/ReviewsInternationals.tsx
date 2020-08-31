import React, { useState } from 'react';
import Review from './Review';

import { IReview } from '../commons/interfaces';

interface IProps {
  internationalReviews: IReview[]
}

const ReviewsInternationals = ({ internationalReviews }: IProps) => {

  let reviews = internationalReviews.map(e => ({ ...e }));

  const [viewAll, setViewAll] = useState(false);

  if (!viewAll) {
    reviews = reviews.filter((e, index) => index < 2);
  }

  return (
    <span className="cr-widget-DesktopGlobalReviews" data-hook="cr-widget-DesktopGlobalReviews">
      <div className="a-divider a-divider-section a-spacing-extra-large">
        <div className="a-divider-inner"></div>
      </div>
      <span className="global-reviews-all">
        <div id="reviews-medley-global-expand-head" data-hook="reviews-medley-global-head" className="a-section global-reviews-header">
          <h3 data-hook="dp-global-reviews-header" className="a-spacing-base">
            Las mejores reseñas internacionales
          </h3>
          <div className="a-section cr-list-loading reviews-loading aok-hidden"></div>
        </div>
        <div className="a-row a-spacing-large">
          <div className="a-section global-reviews-content celwidget" data-csa-c-id="pq4ci3-zc10ve-8nedtl-d2jl28" data-cel-widget="">
            <div id="cm-cr-global-review-list" data-hook="global-customer-reviews-widget" className="a-section global-review-views review-views celwidget" data-csa-c-id="k8cqko-srl8x5-47yszm-x4cy4h" data-cel-widget="cm-cr-global-review-list">
              {reviews.map(rev => (
                <Review {...rev} />
              ))}
              <div id="cr-pagination-footer-2" className="a-section a-spacing-top-extra-large" onClick={() => setViewAll(!viewAll)}>
                {viewAll ? (
                  <a className="a-link-emphasis a-text-bold">Ver menos</a>
                ) : (
                    <a className="a-link-emphasis a-text-bold">Ver todas las reseñas internacionales</a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </span>
    </span>
  );
}

export default ReviewsInternationals;