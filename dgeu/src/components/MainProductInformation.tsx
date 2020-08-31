import React, { useState } from 'react';
import MainProductTitle from './MainProductTitle';
import FormatsAndEditions from './FormatsAndEditions';
import CollegeBooks from './CollegeBooks';
import { IPriceFormat } from '../commons/interfaces';
import DeliveryDates from './DeliveryDates';
import MainProductAuthor from './MainProductAuthor';
import MainProductReview from './MainProductReview';
import MainProductCollection from './MainProductCollection';

interface IProps {
  title: string;
  subtitle: string;
  author: string;
  authorUrl: string;
  collectionName: string;
  collectionUrl: string;
  freeDelivery: string;
  fastDelivery: string;
  numberOpinions: number;
  rating: number;
  description: string;
  moreDescription: string;
  priceFormats: IPriceFormat[];
  acSetProductSelected: (id: number) => void;
}

const MainProductInformation = ({ title, subtitle, author, authorUrl, collectionName, collectionUrl, freeDelivery, fastDelivery, numberOpinions, rating, description, moreDescription, priceFormats, acSetProductSelected }: IProps) => {

  const [readMore, setReadMore] = useState(false);
  const [showFormats, setShowFormats] = useState(false);

  const isSelectedKindle = priceFormats.find(e => e.id === 0 && e.selected);

  return (
    <div id="centerCol" >
      <MainProductTitle title={title} subtitle={subtitle} />
      <MainProductAuthor author={author} authorUrl={authorUrl} />
      <MainProductReview rating={rating} numberOpinions={numberOpinions} />
      <MainProductCollection collectionName={collectionName} collectionUrl={collectionUrl} />
      <hr />
      <div id="MediaMatrix" className="celwidget">
        <div id="formats" className="a-section a-spacing-large responsive">
          <a className="a-link-expander a-spacing-top-micro a-spacing-small a-size-small" onClick={() => setShowFormats(!showFormats)}>
            <i id="formatsIcon" className="a-icon a-icon-arrow" role="img"></i>
            {showFormats ?
              (
                <span id="hideMoreFormatsPrompt" className="tmmShowPrompt">Ocultar otros formatos y ediciones</span>
              ) :
              (
                <span id="showMoreFormatsPrompt" className="tmmShowPrompt">Ver los  formatos y ediciones</span>
              )
            }
          </a>
          {showFormats ? (
            <FormatsAndEditions priceFormats={priceFormats} acSetProductSelected={acSetProductSelected} />
          ) : (
              <div id="tmmSwatches" className="a-row">
                <ul className="a-unordered-list a-nostyle a-button-list a-horizontal">
                  {priceFormats.map(priceFormat => (
                    <li className={`swatchElement ${priceFormat.selected ? 'selected' : 'unselected'}`} data-width="173">
                      <span className="a-list-item">
                        <span className={`a-button a-spacing-mini a-button-toggle format ${priceFormat.selected ? 'a-button-selected' : ''}`} id="a-autoid-6" onClick={() => acSetProductSelected(priceFormat.id)}>
                          <span className="a-button-inner">
                            <a className="a-button-text" role="button" id="a-autoid-6-announce">
                              <span>{priceFormat.product}</span>
                              <br />
                              <span className="a-color-secondary">
                                <span className="a-size-base a-color-secondary">
                                  {priceFormat.price} €
                            </span>
                              </span>
                            </a>
                          </span>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
      {!isSelectedKindle ? (
        <DeliveryDates freeDelivery={freeDelivery} fastDelivery={fastDelivery} />
      ) : null}
      <div id="bookDescription_feature_div" className="celwidget" data-feature-name="bookDescription" data-csa-c-id="4qh2e0-ut9lvm-p4c30o-tizzk1" data-cel-widget="bookDescription_feature_div">
        <div>
          <p>{description}</p>
          {readMore ? (
            <p>{moreDescription}</p>
          ) : null}
        </div>
        <em></em>
        <div id="psPlaceHolder" style={{ height: "20px", display: "block" }}>
          <div style={{ zIndex: 3 }}>
            <a className="a-link-expander h2-expander" onClick={() => setReadMore(!readMore)}>
              <i id="bdExpanderIcon" className="a-icon a-icon-expand" role="img"></i>
              {readMore ? (
                <span id="bdSeeLessPrompt" style={{ display: "block" }}>Leer menos</span>
              ) : (
                  <span id="bdSeeAllPrompt" style={{ display: "block" }}>Leer más</span>
                )}
            </a>
          </div>
        </div>
      </div>
      <CollegeBooks />
    </div >
  );
}

export default MainProductInformation;