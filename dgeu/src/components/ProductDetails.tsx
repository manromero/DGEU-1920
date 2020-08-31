import React from 'react';
import { calculateStartsClass } from '../commons/utils';
import useStyles from '../styles/ProductDetails';

interface IProps {
  pages: number;
  isbn10: string;
  isbn13: string;
  dimensions: string;
  weight: number;
  publisher: string;
  languaje: string;
  numberOpinions: number;
  rating: number;
}

const ProductDetails = ({ pages, isbn10, isbn13, dimensions, weight, publisher, languaje, numberOpinions, rating }: IProps) => {

  const startIcon = calculateStartsClass(rating);

  const classes = useStyles();

  return (
    <div id="detailBullets_feature_div" className="celwidget" data-feature-name="detailBullets" data-csa-c-id="6f39ob-liu4wh-tvarz-dybm62" data-cel-widget="detailBullets_feature_div">
      <div id="detailBulletsWrapper_feature_div" data-feature-name="detailBullets" data-template-name="detailBullets" className="a-section feature detail-bullets-wrapper bucket" data-cel-widget="detailBulletsWrapper_feature_div">
        <hr className="a-divider-normal bucketDivider" />
        <h2>Detalles del producto</h2>
        <span className="disclaim"></span>
        <div id="detailBullets_feature_div">
          <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>Tapa dura: </span>
                <span>{pages} páginas</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>ISBN-10: </span>
                <span>{isbn10}</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>ISBN-13: </span>
                <span>{isbn13}</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>Dimensiones del producto: </span>
                <span>{dimensions}</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>Peso del producto: </span>
                <span>{weight} g</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>Editorial: </span>
                <span>{publisher}</span>
              </span>
            </li>
            <li>
              <span className={classes.listItem}>
                <span className={classes.label}>Idioma: </span>
                <span>{languaje}</span>
              </span>
            </li>
          </ul>
        </div>
        <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
          <li>
            <span className={classes.listItem}>
              <span className={classes.label}>
                Opiniones de los clientes:
              </span>
              <div id="detailBullets_averageCustomerReviews" data-asin="8408197401" data-ref="dpx_acr_pop_">
                <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}">
                  <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="4,5 de 5 estrellas">
                    <span className="a-declarative" data-action="a-popover">
                      <a className="a-popover-trigger a-declarative" onClick={() => {
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
            </span>
          </li>
        </ul>
        <div className="a-row"></div>
        <div className="a-row"></div>
      </div>
    </div>
  );
}

export default ProductDetails;