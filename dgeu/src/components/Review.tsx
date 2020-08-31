import React from 'react';
import { IReview } from '../commons/interfaces';
import { calculateStartsClass } from '../commons/utils';
import useStyles from '../styles/Review';

interface IProps extends IReview {

};

const Review = ({ id, author, authorImgUrl, summary, rating, revisionDate, comment, utilNumber, reviewUrl }: IProps) => {

  const startIcon = calculateStartsClass(rating);

  const classes = useStyles();

  return (
    <div id={id} className="a-section review aok-relative">
      <div id={`${id}-review-card`} className="a-row a-spacing-none">
        <div id={`customer_review-${id}`} className="a-section celwidget">
          <div className="a-row a-spacing-mini">
            <a href={reviewUrl} className="a-profile">
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
            <a className={classes.summary} href={reviewUrl}>
              <span> {summary}</span>
            </a>
          </div>
          <span className={classes.revisionDate}>
            {revisionDate}
          </span>
          <div className={classes.verifiedPurchaseContainer}>
            <span className={classes.verifiedPurchase}>Compra verificada</span>
          </div>
          <div className="a-row a-spacing-small review-data">
            <span className="a-size-base review-text">
              <div className={classes.commentContainer}>
                <div className={classes.comment}>
                  <span>
                    {comment}
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div className="a-row review-comments cr-vote-action-bar">
            <span className="cr-vote" >
              <div className="a-row a-spacing-small">
                <span className={classes.utilNumber}>A {utilNumber} personas les ha parecido esto útil</span>
              </div>
              <div className="cr-helpful-button aok-float-left">
                <span className="a-button a-button-base">
                  <span className="a-button-inner">
                    <a className="a-button-text" role="button">
                      <div className="cr-helpful-text">
                        Útil
                      </div>
                    </a>
                  </span>
                </span>
              </div>
            </span>
            <i className="a-icon a-icon-text-separator" role="img" aria-label="|"></i>
            <a className={classes.inform} href={reviewUrl}>Comentar</a>
            <span className="cr-footer-line-height">
              <span>
                <i className="a-icon a-icon-text-separator" role="img" aria-label="|"></i>
                <span className="a-declarative">
                  <a className={classes.inform} href={reviewUrl}>Informar de un abuso</a>
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