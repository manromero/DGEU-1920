import React from 'react';
import { calculateStartsClass } from '../commons/utils';

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

  return (
    <div id="detailBullets_feature_div" className="celwidget" data-feature-name="detailBullets" data-csa-c-id="6f39ob-liu4wh-tvarz-dybm62" data-cel-widget="detailBullets_feature_div">
      <div id="detailBulletsWrapper_feature_div" data-feature-name="detailBullets" data-template-name="detailBullets" className="a-section feature detail-bullets-wrapper bucket" data-cel-widget="detailBulletsWrapper_feature_div">
        <hr className="a-divider-normal bucketDivider" />
        <h2>Detalles del producto</h2>
        <span className="disclaim"></span>
        <div id="detailBullets_feature_div">
          <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">Tapa dura: </span>
                <span>{pages} páginas</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">ISBN-10: </span>
                <span>{isbn10}</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">ISBN-13: </span>
                <span>{isbn13}</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">Dimensiones del producto: </span>
                <span>{dimensions}</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">Peso del producto: </span>
                <span>{weight} g</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">Editorial: </span>
                <span>{publisher}</span>
              </span>
            </li>
            <li>
              <span className="a-list-item">
                <span className="detail-bullet-label a-text-bold">Idioma: </span>
                <span>{languaje}</span>
              </span>
            </li>
          </ul>
        </div>
        <ul className="a-unordered-list a-nostyle a-vertical a-spacing-none detail-bullet-list">
          <li>
            <span className="a-list-item">
              <span className="detail-bullet-label a-text-bold">
                Opiniones de los clientes:
              </span>
              <div id="detailBullets_averageCustomerReviews" data-asin="8408197401" data-ref="dpx_acr_pop_">
                <span className="a-declarative" data-action="acrStarsLink-click-metrics" data-acrstarslink-click-metrics="{}">
                  <span id="acrPopover" className="reviewCountTextLinkedHistogram noUnderline" title="4,5 de 5 estrellas">
                    <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=8408197401&quot;}">
                      <i className={`a-icon a-icon-star ${startIcon}`}>
                        <span className="a-icon-alt"> {rating} de 5 estrellas</span>
                      </i>
                    </span>
                    <span className="a-letter-space"></span>
                  </span>
                </span>
                <span className="a-letter-space"></span>
                <span className="a-declarative" data-action="acrLink-click-metrics" data-acrlink-click-metrics="{}">
                  <span id="acrCustomerReviewText" className="a-size-base">{numberOpinions} valoraciones</span>
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