import React, { useState } from 'react';
import Review from './Review';
import { IReview } from '../commons/interfaces';
import { sortReviewMostImportant, sortReviewDate } from '../commons/utils';

interface IProps {
  customerReviews: IReview[]
}

const ReviewsCustomers = ({ customerReviews }: IProps) => {

  let reviews = customerReviews.map(e => ({ ...e }));

  const [viewAll, setViewAll] = useState(false);
  const [sort, setSort] = useState('util');

  if (sort === 'util') {
    reviews.sort(sortReviewMostImportant);
  } else {
    reviews.sort(sortReviewDate);
  }

  if (!viewAll) {
    reviews = reviews.filter((e, index) => index < 2);
  }

  return (
    <span className="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <div id="reviews-medley-global-expand-head" data-hook="reviews-medley-global-head" className="a-section global-reviews-header">
        <h3 data-hook="dp-global-reviews-header" className="a-spacing-base">
          Reseñas Nacionales
        </h3>
      </div>
      <div id="cm-cr-dp-review-header" className="a-section a-spacing-small"></div>
      <div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" className="a-section a-spacing-small">
        <span className="a-declarative" data-action="reviews:filter-action:change" >
          <span className="a-dropdown-container">
            <select value={sort} id="cm-cr-sort-dropdown" onChange={e => setSort(e.target.value)} data-action="a-dropdown-select" className="a-native-dropdown a-declarative">
              <option value="util" data-a-css-className="cm-cr-sort-order-option">
                Reseñas más importantes
              </option>
              <option value="date" data-a-css-className="cm-cr-sort-order-option">
                Más recientes
              </option>
            </select>
          </span>
        </span>
      </div>
      <span className="cr-translate-cta"></span>
      <div className="a-row">
        <div className="a-section a-spacing-extra-large a-spacing-top-medium a-text-center review-load-error aok-hidden">
          <div className="a-box a-alert a-alert-error cr-error" aria-live="assertive" role="alert">
            <div className="a-box-inner a-alert-container">
              <h4 className="a-alert-heading">Ha surgido un problema al filtrar las opiniones justo en este momento. Vuelva a intentarlo en otro momento.</h4>
              <i className="a-icon a-icon-alert"></i>
              <div className="a-alert-content"></div>
            </div>
          </div>
        </div>
        <div id="cm-cr-dp-reviews-loading-wrapper" className="a-row a-spacing-medium aok-hidden">
          <div className="a-spinner-wrapper cr-reviews-loading aok-hidden">
            <span className="a-spinner a-spinner-medium"></span>
          </div>
        </div>
        <div className="a-section a-spacing-extra-large reviews-content filterable-reviews-content celwidget" data-csa-c-id="hhykyl-40wor-8d0xfm-wlh0ba" data-cel-widget="">
          <div id="cm-cr-dp-review-list" data-hook="top-customer-reviews-widget" className="a-section review-views celwidget" data-csa-c-id="tqp5wy-5otbre-vy1hqw-ysd8sr" data-cel-widget="cm-cr-dp-review-list">
            {reviews.map(rev => (
              <Review {...rev} />
            ))}
          </div>
        </div>
      </div>
      <div id="reviews-medley-footer" data-hook="reviews-medley-footer" className="a-section">
        <div className="a-row"></div>
        <div className="a-row a-spacing-extra-large" onClick={() => setViewAll(!viewAll)}>
          {viewAll ? (
            <a className="a-link-emphasis a-text-bold">Ver menos</a>
          ) : (
              <a className="a-link-emphasis a-text-bold">Ver todas las reseñas de España</a>
            )}
        </div>
      </div>
    </span>
  );
}

export default ReviewsCustomers;