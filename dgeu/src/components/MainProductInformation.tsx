import React, { useState } from 'react';
import MainProductTitle from './MainProductTitle';
import FormatsAndEditions from './FormatsAndEditions';
import CollegeBooks from './CollegeBooks';
import { IPriceFormat } from '../commons/interfaces';
import DeliveryDates from './DeliveryDates';

interface IProps {
  title: string;
  subtitle: string;
  author: string;
  authorUrl: string,
  collectionName: string,
  collectionUrl: string,
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
    <div id="centerCol" className="centerColumn">
      <div id="qpeTitleTag_feature_div" className="celwidget" data-feature-name="qpeTitleTag" data-csa-c-id="9vrxse-fb5s2x-1kzx0f-vg3oc" data-cel-widget="qpeTitleTag_feature_div">
      </div>
      <MainProductTitle title={title} subtitle={subtitle} />
      <div id="bylineInfo_feature_div" className="celwidget" data-feature-name="bylineInfo" data-csa-c-id="866dkm-njwzze-j8m38o-y9mqzv" data-cel-widget="bylineInfo_feature_div">
        <div id="bylineInfo" className="a-section a-spacing-micro bylineHidden feature" data-cel-widget="bylineInfo">
          de
          <span className="author notFaded" data-width="">
            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Cerrar mensaje emergente de diálogo de autor&quot;,&quot;name&quot;:&quot;contributor-info-B00JA7ZCES&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;Mensaje emergente de diálogo de autor&quot;,&quot;allowLinkDefault&quot;:&quot;true&quot;}">
              <a data-asin="B00JA7ZCES" className="a-link-normal contributorNameID" href={authorUrl}>{' '}{author}</a>
              <a href="javascript:void(0)" className="a-popover-trigger a-declarative"><i className="a-icon a-icon-popover"></i></a>
            </span>
            <span className="contribution">
              <span className="a-color-secondary">(Autor)</span>
            </span>
          </span>
        </div>
      </div>
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
      <div id="seriesTitle_feature_div" className="celwidget" data-feature-name="seriesTitle" data-csa-c-id="8eo4wd-ua7ctr-8rlm8r-cguog3" data-cel-widget="seriesTitle_feature_div">
        <span className="a-size-small a-color-secondary a-text-bold">Libro 1</span><span className="a-size-small a-color-secondary"> de 2 en la colección </span>
        <a id="series-page-link" className="a-link-normal" href={collectionUrl}>
          <span className="a-size-small">{collectionName}</span>
        </a>
      </div>
      <div id="acBadge_feature_div" className="celwidget" data-feature-name="acBadge" data-csa-c-id="uecex-jaq1m8-pjemru-a6dshx" data-cel-widget="acBadge_feature_div"></div>
      <div id="zeitgeistBadge_feature_div" className="celwidget" data-feature-name="zeitgeistBadge" data-csa-c-id="rupkca-gdm32v-h9erb6-4ys10p" data-cel-widget="zeitgeistBadge_feature_div"></div>
      <hr />
      <div id="MediaMatrix" className="celwidget" data-feature-name="MediaMatrix" data-csa-c-id="oxlltn-7eirb0-mrjffi-nitmbc" data-cel-widget="MediaMatrix">
        <span className="a-declarative" data-action="close-all-offers-display" data-close-all-offers-display="{}">
          <div id="aod-background" className="a-section aok-hidden aod-darken-background"></div>
        </span>
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
      <div id="edpIngress_feature_div" className="celwidget" data-feature-name="edpIngress" data-csa-c-id="7qjdpw-d5r2vy-ifb3sd-zc3ew4" data-cel-widget="edpIngress_feature_div"></div>
      <CollegeBooks />
      <div id="andonCord_feature_div" className="celwidget" data-feature-name="andonCord" data-csa-c-id="5b41qt-tv1w9f-odtmjk-2auro9" data-cel-widget="andonCord_feature_div"></div>
    </div >
  );
}

export default MainProductInformation;