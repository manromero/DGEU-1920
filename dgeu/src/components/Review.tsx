import React from 'react';
import { calculateStartsClass } from '../commons/utils';

interface IProps {
  id: string;
  author: string;
  authorImgUrl: string;
  summary: string;
  rating: number;
  revisionDate: string;
  comment: string;
  utilNumber: number;
  reviewUrl: string;
};

const Review = ({ id, author, authorImgUrl, summary, rating, revisionDate, comment, utilNumber, reviewUrl }: IProps) => {

  const startIcon = calculateStartsClass(rating);

  return (
    <div id={id} data-hook="review" className="a-section review aok-relative">
      <div id={`${id}-review-card`} className="a-row a-spacing-none">
        <div id={`customer_review-${id}`} className="a-section celwidget" data-csa-c-id="q26fnx-jn57q5-sy77qg-7pobyv" data-cel-widget="customer_review-R1NCBWWFLGHUY5">
          <div data-hook="genome-widget" className="a-row a-spacing-mini">
            <a href={reviewUrl} className="a-profile" data-a-size="small">
              <div aria-hidden="true" className="a-profile-avatar-wrapper">
                <div className="a-profile-avatar">
                  <img src={authorImgUrl} />
                </div>
              </div>
              <div className="a-profile-content">
                <span className="a-profile-name">{author}</span>
              </div>
            </a>
          </div>
          <div className="a-row">
            <a className="a-link-normal" title={`${rating} de 5 estrellas`} href={reviewUrl}>
              <i data-hook="review-star-rating" className={`a-icon a-icon-star ${startIcon} review-rating`}>
                <span className="a-icon-alt">{`${rating} de 5 estrellas`}</span>
              </i>
            </a>
            <span className="a-letter-space"></span>
            <a data-hook="review-title" className="a-size-base a-link-normal review-title a-color-base review-title-content a-text-bold" href={reviewUrl}>
              <span>{summary}</span>
            </a>
          </div>
          <span data-hook="review-date" className="a-size-base a-color-secondary review-date">
            {revisionDate}
          </span>
          <div className="a-row a-spacing-mini review-data review-format-strip">
            <span data-hook="avp-badge-linkless" className="a-size-mini a-color-state a-text-bold">Compra verificada</span>
          </div>
          <div className="a-row a-spacing-small review-data">
            <span data-hook="review-body" className="a-size-base review-text">
              <div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" className="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style={{ maxHeight: "300px" }}>
                <div data-hook="review-collapsed" aria-expanded="false" className="a-expander-content reviewText review-text-content a-expander-partial-collapse-content">
                  <span>
                    {comment}
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div data-hook="review-comments" className="a-row review-comments cr-vote-action-bar">
            <span className="cr-vote" data-hook="review-voting-widget">
              <div className="a-row a-spacing-small">
                <span data-hook="helpful-vote-statement" className="a-size-base a-color-tertiary cr-vote-text">A {utilNumber} personas les ha parecido esto útil</span>
              </div>
              <div className="cr-helpful-button aok-float-left">
                <span className="a-button a-button-base" id="a-autoid-24">
                  <span className="a-button-inner">
                    <a data-hook="vote-helpful-button" className="a-button-text" role="button" id="a-autoid-24-announce">
                      <div className="cr-helpful-text">
                        Útil
                      </div>
                    </a>
                  </span>
                </span>
              </div>
            </span>
            <i className="a-icon a-icon-text-separator" role="img" aria-label="|"></i>
            <a data-hook="review-comment" className="a-size-base a-link-normal a-color-secondary a-text-normal" href={reviewUrl}>Comentar</a>
            <span className="cr-footer-line-height">
              <span>
                <i className="a-icon a-icon-text-separator" role="img" aria-label="|"></i>
                <span className="a-declarative" data-action="cr-popup">
                  <a className="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href={reviewUrl}>Informar de un abuso</a>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;