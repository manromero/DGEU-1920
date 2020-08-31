import React from 'react';
import useStyles from '../styles/MainProductReview';
import { calculateStartsClass } from '../commons/utils';

interface IProps {
  numberOpinions: number;
  rating: number;
}

const MainProductReview = ({ rating, numberOpinions }: IProps) => {

  const startIcon = calculateStartsClass(rating);

  const classes = useStyles();
  return (
    <div className={classes.container} >
      <div className={classes.averageCustomerReviews}>
        <span>
          <span title={`${rating} de 5 estrellas`}>
            <span>
              <a onClick={() => {
                if (document.getElementById('reviewsMedley')) {
                  document.getElementById('reviewsMedley')!.scrollIntoView()
                }
              }}>
                <i className={`a-icon a-icon-star ${startIcon}`}>
                  <span className="a-icon-alt">{rating} de 5 estrellas</span>
                </i>
                <i className="a-icon a-icon-popover"></i>
              </a>
            </span>
            <span className={classes.iconPopOver}></span>
          </span>
        </span>
        <span>
          <a onClick={() => {
            if (document.getElementById('reviewsMedley')) {
              document.getElementById('reviewsMedley')!.scrollIntoView()
            }
          }}>
            <span className={classes.ratings}>
              {' '}{numberOpinions} valoraciones
            </span>
          </a>
        </span>
      </div>
    </div >
  );
}

export default MainProductReview;