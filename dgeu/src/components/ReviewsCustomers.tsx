import React, { useState } from 'react';
import Review from './Review';
import { IReview } from '../commons/interfaces';

interface IProps {
  customerReviews: IReview[]
}

const ReviewsCustomers = ({ customerReviews }: IProps) => {

  let reviews = customerReviews.map(e => ({ ...e }));

  const [viewAll, setViewAll] = useState(false);

  if (!viewAll) {
    reviews = reviews.filter((e, index) => index < 2);
  }

  return (
    <span className="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <a id="customer-reviews-content" aria-label="Reseñas más importantes" className="a-link-normal celwidget" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#" data-csa-c-id="mo7j3r-rkgnlc-jklna0-ij075d" data-cel-widget="customer-reviews-content"></a>
      <div id="cm-cr-dp-review-header" className="a-section a-spacing-small"></div>
      <div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" className="a-section a-spacing-small">
        <span className="a-declarative" data-action="reviews:filter-action:change" >
          <span className="a-dropdown-container">
            <select name="" id="cm-cr-sort-dropdown" data-action="a-dropdown-select" className="a-native-dropdown a-declarative">
              <option value="helpful" data-a-css-className="cm-cr-sort-order-option">
                Reseñas más importantes
              </option>
              <option value="recent" data-a-css-className="cm-cr-sort-order-option">
                Más recientes
              </option>
            </select>
            <span data-a-className="cm-cr-dp-filter-dropdown" className="a-button a-button-dropdown a-button-small cm-cr-dp-filter-dropdown" aria-hidden="true" id="a-autoid-23" style={{ minWidth: "0%" }}>
              <span className="a-button-inner">
                <span className="a-button-text a-declarative" data-action="a-dropdown-button" role="button" aria-hidden="true" id="a-autoid-23-announce">
                  <span className="a-dropdown-prompt">
                    Reseñas más importantes
                  </span>
                </span>
                <i className="a-icon a-icon-dropdown"></i>
              </span>
            </span>
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
              <Review
                id={rev.id}
                author={rev.author}
                authorImgUrl={rev.authorImgUrl}
                summary={rev.summary}
                rating={rev.rating}
                revisionDate={rev.revisionDate}
                comment={rev.comment}
                utilNumber={rev.utilNumber}
                reviewUrl={rev.reviewUrl}
              />
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