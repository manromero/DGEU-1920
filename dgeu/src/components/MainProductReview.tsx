import React from 'react';

interface IProps {
  numberOpinions: number;
  rating: number;
}

const MainProductReview = ({ rating, numberOpinions }: IProps) => {
  return (
    <div id="averageCustomerReviews_feature_div" className="celwidget" data-feature-name="averageCustomerReviews" data-csa-c-id="josfti-dtztjc-3vhzik-3qkxb1" data-cel-widget="averageCustomerReviews_feature_div">
      <div id="averageCustomerReviews" data-asin="8408197401" data-ref="dpx_acr_pop_">
        <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}">
          <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="4,5 de 5 estrellas">
            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=8408197401&quot;}">
              <a className="a-popover-trigger a-declarative" onClick={() => {
                if (document.getElementById('reviewsMedley')) {
                  document.getElementById('reviewsMedley')!.scrollIntoView()
                }
              }}>
                <i className="a-icon a-icon-star a-star-4-5">
                  <span className="a-icon-alt">{rating} de 5 estrellas</span>
                </i>
                <i className="a-icon a-icon-popover"></i>
              </a>
            </span>
            <span className="a-letter-space"></span>
          </span>
        </span>
        <span className="a-letter-space"></span>
        <span className="a-declarative" data-action="acrLink-click-metrics" data-acrlink-click-metrics="{}">
          <a id="acrCustomerReviewLink" className="a-link-normal" onClick={() => {
            if (document.getElementById('reviewsMedley')) {
              document.getElementById('reviewsMedley')!.scrollIntoView()
            }
          }}>
            <span id="acrCustomerReviewText" className="a-size-base">
              {numberOpinions} valoraciones
            </span>
          </a>
        </span>
      </div>
    </div>
  );
}

export default MainProductReview;