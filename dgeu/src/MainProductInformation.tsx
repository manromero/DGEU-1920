import React, { useState } from 'react';
import ImgBooks from './static/images/books.jpg';
import MainProductTitle from './MainProductTitle';
import FormatsAndEditions from './FormatsAndEditions';

const MainProductInformation = () => {

  const [readMore, setReadMore] = useState(false);
  const [showFormats, setShowFormats] = useState(false);

  return (
    <div id="centerCol" className="centerColumn">
      <div id="qpeTitleTag_feature_div" className="celwidget" data-feature-name="qpeTitleTag" data-csa-c-id="9vrxse-fb5s2x-1kzx0f-vg3oc" data-cel-widget="qpeTitleTag_feature_div">
      </div>
      <MainProductTitle />
      <div id="bylineInfo_feature_div" className="celwidget" data-feature-name="bylineInfo" data-csa-c-id="866dkm-njwzze-j8m38o-y9mqzv" data-cel-widget="bylineInfo_feature_div">
        <div id="bylineInfo" className="a-section a-spacing-micro bylineHidden feature" data-cel-widget="bylineInfo">
          de
          <span className="author notFaded" data-width="">
            <span className="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Cerrar mensaje emergente de diálogo de autor&quot;,&quot;name&quot;:&quot;contributor-info-B00JA7ZCES&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;Mensaje emergente de diálogo de autor&quot;,&quot;allowLinkDefault&quot;:&quot;true&quot;}">
              <a data-asin="B00JA7ZCES" className="a-link-normal contributorNameID" href="https://www.amazon.es/Santiago-Posteguillo/e/B00JA7ZCES/ref=dp_byline_cont_book_1"> Santiago Posteguillo</a>
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
                <a href="javascript:void(0)" className="a-popover-trigger a-declarative">
                  <i className="a-icon a-icon-star a-star-4-5">
                    <span className="a-icon-alt">4,5 de 5 estrellas</span>
                  </i>
                  <i className="a-icon a-icon-popover"></i>
                </a>
              </span>
              <span className="a-letter-space"></span>
            </span>
          </span>
          <span className="a-letter-space"></span>
          <span className="a-declarative" data-action="acrLink-click-metrics" data-acrlink-click-metrics="{}">
            <a id="acrCustomerReviewLink" className="a-link-normal" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#customerReviews">
              <span id="acrCustomerReviewText" className="a-size-base">
                990 valoraciones
              </span>
            </a>
          </span>
        </div>
      </div>
      <div id="seriesTitle_feature_div" className="celwidget" data-feature-name="seriesTitle" data-csa-c-id="8eo4wd-ua7ctr-8rlm8r-cguog3" data-cel-widget="seriesTitle_feature_div">
        <span className="a-size-small a-color-secondary a-text-bold">Libro 1</span><span className="a-size-small a-color-secondary"> de 2 en la colección </span>
        <a id="series-page-link" className="a-link-normal" href="https://www.amazon.es/gp/bookseries/B08FH7GDHL/ref=dp_st_8408197401">
          <span className="a-size-small">Julia Domna </span>
        </a>
      </div>
      <div id="acBadge_feature_div" className="celwidget" data-feature-name="acBadge" data-csa-c-id="uecex-jaq1m8-pjemru-a6dshx" data-cel-widget="acBadge_feature_div"></div>
      <div id="zeitgeistBadge_feature_div" className="celwidget" data-feature-name="zeitgeistBadge" data-csa-c-id="rupkca-gdm32v-h9erb6-4ys10p" data-cel-widget="zeitgeistBadge_feature_div"></div>
      <hr />
      <div id="MediaMatrix" className="celwidget" data-feature-name="MediaMatrix" data-csa-c-id="oxlltn-7eirb0-mrjffi-nitmbc" data-cel-widget="MediaMatrix">
        <div id="all-offers-display" className="a-section">
          <div id="all-offers-display-spinner" className="a-spinner-wrapper aok-hidden"><span className="a-spinner a-spinner-medium"></span></div>
          <form method="get" action="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1" className="aok-hidden all-offers-display-params">
            <input type="hidden" name="" value="C" id="all-offers-display-weblab-treatment" />
            <input type="hidden" name="" value="true" id="all-offers-display-reload-param" />
            <input type="hidden" name="" id="all-offers-display-params" data-asin="8408197401" data-m="" data-pinnedofferhash="" data-qid="1598543175" data-smid="" data-sourcecustomerorglistid="" data-sourcecustomerorglistitemid="" data-sr="8-1" />
            <input type="hidden" name="" value="DP_ALL_OFFERS_DISPLAY_DESKTOP_MASTER_221923" id="all-offers-display-weblab-name" />
            <input type="hidden" name="" value="false" id="all-offers-display-is-customizable-asin" />
          </form>
        </div>
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
            <FormatsAndEditions />
          ) : null}
          <div id="tmmSwatches" className="a-row">
            <ul className="a-unordered-list a-nostyle a-button-list a-horizontal">
              <li className="swatchElement unselected" data-width="173">
                <span className="a-list-item">
                  <span className="a-button a-spacing-mini a-button-toggle format" id="a-autoid-6">
                    <span className="a-button-inner">
                      <a href="https://www.amazon.es/Yo-Julia-Planeta-Volumen-independiente-ebook/dp/B07JK6ZS94/ref=tmm_kin_swatch_0?_encoding=UTF8&amp;qid=1598543175&amp;sr=8-1" className="a-button-text" role="button" id="a-autoid-6-announce">
                        <span>Versión Kindle</span>
                        <br />
                        <span className="a-color-secondary">
                          <span className="a-size-base a-color-secondary">
                            6,64&nbsp;€
                          </span>
                        </span>
                      </a>
                    </span>
                  </span>
                  <span className="tmm-olp-links"></span>
                  <span className="a-size-mini a-color-secondary tmm-olp-links">
                    <a id="kcpAppsPopOver" className="a-size-mini a-link-normal kcpAppsPopOver" href="javascript:void(0);">
                      <span className="kcpAppBaseBox_">
                        <span className="kcpAppsPopOver a-declarative">
                          Leer con nuestra
                          <span className="a-color-price a-text-bold">
                            App gratuita
                          </span>
                        </span>
                      </span>
                    </a>
                  </span>
                  <span className="tmm-olp-links"></span>
                </span>
              </li>
              <li className="swatchElement selected" data-width="163">
                <span className="a-list-item">
                  <span className="a-button a-button-selected a-spacing-mini a-button-toggle format" id="a-autoid-7">
                    <span className="a-button-inner">
                      <a href="javascript:void(0)" className="a-button-text" role="button" id="a-autoid-7-announce">
                        <span>Tapa dura</span>
                        <br />
                        <span className="a-color-base">
                          <span className="a-size-base a-color-price a-color-price">
                            21,75&nbsp;€
                          </span>
                        </span>
                        <div style={{ display: "inline-block" }}></div>
                      </a>
                    </span>
                  </span>
                  <span className="tmm-olp-links"></span>
                  <span className="tmm-olp-links">
                    <span className="olp-used olp-link">
                      <span className="a-declarative" data-action="show-all-offers-display" data-show-all-offers-display="{&quot;aodWeblabName&quot;:&quot;DP_ALL_OFFERS_DISPLAY_DESKTOP_MASTER_221923&quot;,&quot;condition&quot;:&quot;used&quot;,&quot;asin&quot;:&quot;8408197401&quot;,&quot;aodWeblabTreatment&quot;:&quot;C&quot;}">
                        <a className="a-size-mini a-link-normal" href="https://www.amazon.es/gp/offer-listing/8408197401/ref=tmm_hrd_used_olp_0?ie=UTF8&amp;condition=used&amp;qid=1598543175&amp;sr=8-1">
                          1 De 2ª mano
                          <span className="olp-from">desde</span>
                          24,00&nbsp;€
                        </a>
                      </span>
                    </span>
                    <span className="olp-new olp-link">
                      <span className="a-declarative" data-action="show-all-offers-display" data-show-all-offers-display="{&quot;aodWeblabName&quot;:&quot;DP_ALL_OFFERS_DISPLAY_DESKTOP_MASTER_221923&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;asin&quot;:&quot;8408197401&quot;,&quot;aodWeblabTreatment&quot;:&quot;C&quot;}">
                        <a className="a-size-mini a-link-normal" href="https://www.amazon.es/gp/offer-listing/8408197401/ref=tmm_hrd_new_olp_0?ie=UTF8&amp;condition=new&amp;qid=1598543175&amp;sr=8-1">
                          17 Nuevo
                        <span className="olp-from">desde</span>
                        21,40&nbsp;€
                      </a>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li className="swatchElement unselected" data-width="143">
                <span className="a-list-item">
                  <span className="a-button a-spacing-mini a-button-toggle format" id="a-autoid-8">
                    <span className="a-button-inner">
                      <a href="https://www.amazon.es/Yo-Julia-Domna-Novela-hist%C3%B3rica/dp/8408234498/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=1598543175&amp;sr=8-1" className="a-button-text" role="button" id="a-autoid-8-announce">
                        <span>Tapa blanda</span>
                        <br />
                        <span className="a-color-secondary">
                          <span className="a-size-base a-color-secondary">
                            13,25&nbsp;€
                          </span>
                        </span>
                        <div style={{ display: "inline-block" }}></div>
                      </a>
                    </span>
                  </span>
                  <span className="tmm-olp-links"></span>
                  <span className="tmm-olp-links">
                    <span className="olp-new olp-link">
                      <span className="a-declarative" data-action="show-all-offers-display" data-show-all-offers-display="{&quot;aodWeblabName&quot;:&quot;DP_ALL_OFFERS_DISPLAY_DESKTOP_MASTER_221923&quot;,&quot;condition&quot;:&quot;new&quot;,&quot;asin&quot;:&quot;8408234498&quot;,&quot;aodWeblabTreatment&quot;:&quot;C&quot;}">
                        <a className="a-size-mini a-link-normal" href="https://www.amazon.es/gp/offer-listing/8408234498/ref=tmm_pap_new_olp_0?ie=UTF8&amp;condition=new&amp;qid=1598543175&amp;sr=8-1">
                          13 Nuevo <span className="olp-from">desde</span> 13,25&nbsp;€
                        </a>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
              <li className="swatchElement unselected" data-width="169" style={{ display: "none" }}>
                <span className="a-list-item">
                  <span className="a-button a-spacing-mini a-button-toggle format" id="a-autoid-9">
                    <span className="a-button-inner">
                      <a href="https://www.amazon.es/Yo-Julia/dp/8408205250/ref=tmm_other_meta_binding_swatch_0?_encoding=UTF8&amp;qid=1598543175&amp;sr=8-1" className="a-button-text" role="button" id="a-autoid-9-announce">
                        <span>Digital</span>
                        <br />
                        <span className="a-color-secondary">
                          <span className="a-size-base a-color-secondary">
                            372,19&nbsp;€
                          </span>
                        </span>
                        <div style={{ display: "inline-block" }}></div>
                      </a>
                    </span>
                  </span>
                  <span className="tmm-olp-links"></span>
                  <span className="tmm-olp-links">
                    <span className="olp-used olp-link">
                      <span className="a-declarative" data-action="show-all-offers-display" data-show-all-offers-display="{&quot;aodWeblabName&quot;:&quot;DP_ALL_OFFERS_DISPLAY_DESKTOP_MASTER_221923&quot;,&quot;condition&quot;:&quot;used&quot;,&quot;asin&quot;:&quot;8408205250&quot;,&quot;aodWeblabTreatment&quot;:&quot;C&quot;}">
                        <a className="a-size-mini a-link-normal" href="https://www.amazon.es/gp/offer-listing/8408205250/ref=tmm_other_meta_binding_used_olp_0?ie=UTF8&amp;condition=used&amp;qid=1598543175&amp;sr=8-1">
                          2 De 2ª mano <span className="olp-from">desde</span> 372,19&nbsp;€
                        </a>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="persistentWidget_feature_div" className="celwidget" data-feature-name="persistentWidget" data-csa-c-id="1ap7wq-6ao52-73lut7-8eov7y" data-cel-widget="persistentWidget_feature_div"></div>
      <div id="b2bUpsell_feature_div" className="celwidget" data-feature-name="b2bUpsell" data-csa-c-id="mvh5kt-bvme8b-z6lpfw-qh7mdy" data-cel-widget="b2bUpsell_feature_div"></div>
      <div id="iconfarmv2_feature_div" className="celwidget" data-feature-name="iconfarmv2" data-csa-c-id="86hhyo-7dc5dh-d9n3gy-h03d9r" data-cel-widget="iconfarmv2_feature_div"></div>
      <div id="applicablePromotionList_feature_div" className="celwidget" data-feature-name="applicablePromotionList" data-csa-c-id="mgbq6m-yolovm-6q7st0-rdrcoi" data-cel-widget="applicablePromotionList_feature_div"></div>
      <div id="holidayDeliveryMessage_feature_div" className="celwidget" data-feature-name="holidayDeliveryMessage" data-csa-c-id="qitrtr-l8ci77-ijjp7g-kmwdbt" data-cel-widget="holidayDeliveryMessage_feature_div"></div>
      <div id="globalStoreBadgePopover_feature_div" className="celwidget" data-feature-name="globalStoreBadgePopover" data-csa-c-id="z2uvaq-wal04i-cbsrzp-yemrt5" data-cel-widget="globalStoreBadgePopover_feature_div"></div>
      <div id="dynamicDeliveryMessage_feature_div" className="celwidget" data-feature-name="dynamicDeliveryMessage" data-csa-c-id="mflt6p-t0awbx-yubasz-1h8nvl" data-cel-widget="dynamicDeliveryMessage_feature_div">
        <div id="dynamicDeliveryMessage" className="a-section a-spacing-mini a-spacing-top-mini">
          <div id="ddmDeliveryMessage" className="a-section a-spacing-mini">
            <a href="https://www.amazon.es/gp/help/customer/display.html?ie=UTF8&amp;pop-up=1&amp;nodeId=202093880" target="AmazonHelp" >Entrega GRATIS:</a>
            <b>
              3 - 4 de sept.
            </b>
            <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ftinfo_dp_?ie=UTF8&amp;pop-up=1&amp;nodeId=202052960" target="AmazonHelp" >Ver detalles</a>
            <br />
            <div className="a-section a-spacing-top-mini">
              Entrega más rápida:
              <b>
                sábado, 29 de ag.
              </b>
              <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&amp;pop-up=1&amp;nodeId=200556720" target="AmazonHelp">Ver detalles</a>
            </div>
          </div>
        </div>
      </div>
      <div id="latestExtraProductInfoFeatureGroup" className="celwidget" data-feature-name="latestExtraProductInfoFeatureGroup" data-csa-c-id="do8wx1-mr1u3e-yhf321-cnnv28" data-cel-widget="latestExtraProductInfoFeatureGroup">
        <div id="newerVersion_feature_div" className="celwidget" data-feature-name="newerVersion" data-csa-c-id="9ddwir-og4v6n-dmq1db-mz3349" data-cel-widget="newerVersion_feature_div"></div>
        <div id="productAlert_feature_div" className="celwidget" data-feature-name="productAlert" data-csa-c-id="30918p-vogeey-jp8yv5-63v1vs" data-cel-widget="productAlert_feature_div"></div>
      </div>
      <div id="dynamicIframe_feature_div" className="celwidget" data-feature-name="dynamicIframe" data-csa-c-id="rahtmj-wrf1lu-kk11dv-18jibz" data-cel-widget="dynamicIframe_feature_div"></div>
      <div id="productOverview_feature_div" className="celwidget" data-feature-name="productOverview" data-csa-c-id="6xa6cv-y374z4-kjksdr-h4c4x0" data-cel-widget="productOverview_feature_div"></div>
      <div id="bookDescription_feature_div" className="celwidget" data-feature-name="bookDescription" data-csa-c-id="4qh2e0-ut9lvm-p4c30o-tizzk1" data-cel-widget="bookDescription_feature_div">
        <div>
          <p>192 d.C. Varios hombres luchan por un imperio, pero Julia, hija de reyes, madre de césares y esposa de emperador, piensa en algo más ambicioso: una dinastía. Roma está bajo el control de Cómodo, un emperador loco. El Senado se conjura para terminar con el tirano y los gobernadores militares más poderosos podrían dar un golpe de Estado: Albino en Britania, Severo en el Danubio o Nigro en Siria. Cómodo retiene a sus esposas para evitar su rebelión y Julia, la mujer de Severo, se convierte así en rehén.</p>
          {readMore ? (
            <p>De pronto, Roma arde. Un incendio asola la ciudad. ¿Es un desastre o una oportunidad? Cinco hombres se disponen a luchar a muerte por el poder. Creen que la partida está a punto de empezar. Pero para Julia la partida ya ha empezado. Sabe que solo una mujer puede forjar una dinastía.</p>
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
      <div id="universalHQP_feature_div" className="celwidget" data-feature-name="universalHQP" data-csa-c-id="t3vdrk-ui6j2y-7dwwxs-7i2oyg" data-cel-widget="universalHQP_feature_div">
        <hr className="a-divider-normal" />
        <div className="a-section a-spacing-base">
          <div className="a-fixed-left-grid universal_hqp_grid_clear_fix">
            <div className="a-fixed-left-grid-inner" style={{ paddingLeft: "75px" }}>
              <div className="a-fixed-left-grid-col a-col-left" style={{ width: "75px", marginLeft: "-75px", float: "left" }}>
                <a className="a-link-normal" href="https://librosdelcole.es/">
                  <img alt="" src={ImgBooks} height="75" width="75" />
                </a>
              </div>
              <div className="a-fixed-left-grid-col a-col-right" style={{ paddingLeft: "3.5%", float: "left" }}>
                <div className="a-row">
                  <span className="a-text-bold">Libros de texto por colegio</span>
                </div>
                <div className="a-row">
                  Encuentra tus libros en librosdelcole.es y finaliza tu compra en amazon.es
                  <a className="a-link-normal" title="Libros de texto por colegio" href="https://librosdelcole.es/">Entra ya</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="andonCord_feature_div" className="celwidget" data-feature-name="andonCord" data-csa-c-id="5b41qt-tv1w9f-odtmjk-2auro9" data-cel-widget="andonCord_feature_div"></div>
    </div>
  );
}

export default MainProductInformation;