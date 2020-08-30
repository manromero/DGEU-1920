import React from 'react';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';
import KindleRecommendation from './KindleRecommendation';
import Reviews from './Reviews';
import RelatedProducts from './RelatedProducts';
import OtherCustomerProducts from './OtherCustomerProducts';
import PreloadPopUp from './PreloadPopUp';
import RightPanel from './RightPanel';
import MainProductInformation from './MainProductInformation';
import SitbReaderPlaceholder from './SitbReaderPlaceholder';
import ArticlesToDiscover from './ArticlesToDiscover';
import RelatedProducts2 from './RelatedProducts2';
import SpecialOffers from './SpecialOffers';
import BoughtTogether from './BoughtTogether';
import Breadcrumbs from './Breadcrumbs';
import LeftPanel from './LeftPanel';

import KindlePop from './KindlePop';

const Body = () => {
  return (
    <div id="dp" className="book es_ES">
      <div></div>
      <div id="PrimeStripeContent"></div>
      <KindlePop />
      <a href="https://www.amazon.es/Yo-Julia-Planeta-Volumen-independiente-ebook/dp/B07JK6ZS94"></a>
      <Breadcrumbs />
      <div id="dp-container" className="a-container" role="main">
        <div id="instantOrderUpdate_feature_div" className="celwidget" data-feature-name="instantOrderUpdate" data-csa-c-id="rmpp8r-388ol8-cbv4hj-jujkjm" data-cel-widget="instantOrderUpdate_feature_div">
          <div id="instantOrderUpdate_feature_div" data-feature-name="instantOrderUpdate" data-template-name="instantOrderUpdate" className="a-row feature" data-cel-widget="instantOrderUpdate_feature_div"></div>
        </div>
        <div id="companyCompliancePolicies_feature_div" className="celwidget" data-feature-name="companyCompliancePolicies" data-csa-c-id="amcusn-ks00f8-dnr8vx-nw3hye" data-cel-widget="companyCompliancePolicies_feature_div"></div>
        <RightPanel />
        <LeftPanel />
        <MainProductInformation />
        <div id="bundleV2_feature_div" className="celwidget" data-feature-name="bundleV2" data-csa-c-id="kvj59e-jbz0w-k7ytc4-dp73zk" data-cel-widget="bundleV2_feature_div"></div>
        <div id="vellumMsg">
          <div id="vellumMsgIco"></div>
          <div id="vellumMsgHdr"></div>
          <div id="vellumMsgTxt"></div>
          <div id="vellumMsgCls" ></div>
        </div>
        <div id="vellumShade" ></div>
        <div id="vellumLdgIco"></div>
        <SitbReaderPlaceholder />
        <div style={{ display: "none" }}>
          {/* <a id="sitbKcpPopoverTrigger" href="javascript:void(0)" className="a-popover-trigger a-declarative"> click to open popover <i className="a-icon a-icon-popover"></i></a> */}
        </div>
        <hr className="bucketDivider" />
        <SpecialOffers />
        <BoughtTogether />
        <div id="miraiBTFShopByLook_feature_div" className="celwidget" data-feature-name="miraiBTFShopByLook" data-csa-c-id="8zg0no-dtk0nt-szudwx-edw3l8" data-cel-widget="miraiBTFShopByLook_feature_div"></div>
        <OtherCustomerProducts />
        <RelatedProducts />
        <PreloadPopUp />
        <ProductDescription />
        {/* <KindleRecommendation /> */}
        <ProductDetails />
        <div id="legal_feature_div" className="celwidget" data-feature-name="legal" data-csa-c-id="lsm0c7-lovfh3-fl195c-w2cgss" data-cel-widget="legal_feature_div">
        </div>
        <div id="cpsia-product-safety-warning_feature_div">
        </div>
        <ArticlesToDiscover />
        <hr className="a-divider-normal" />
        {/* <div id="ape_Detail_dp-ads-center-promo_Desktop_placement" className="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="4805" style={{ display: "block", margin: "auto", lineHeight: "0", width: "970px" }} data-ad-details="{&quot;slot&quot; :&quot;Detail_dp-ads-center-promo_Desktop&quot;,&quot;pageType&quot;: &quot;Detail&quot;,&quot;subPageType&quot;:  &quot;Desktop&quot;,&quot;slotName&quot; :&quot;dp-ads-center-promo&quot;,&quot;src&quot; : &quot;https://aax-eu.amazon.es/e/xsp/getAd?placementId=d5e5e614-eb00-48e7-9be3-4047cfbef514&amp;src=509&amp;slot=dp-ads-center-promo&amp;rid=01016a8a950980780df6f20da107a20ce7db50cfe43fef2e65a663abdd989d082d6f&amp;rj=%7B%7D&quot;,&quot;adServer&quot; :&quot;cs&quot;,&quot;campaignId&quot; :  &quot;4805&quot;,&quot;arid&quot; :&quot;f1a8c8233ce0462db106774f4ce77b0f&quot;,&quot;placementId&quot;: &quot;d5e5e614-eb00-48e7-9be3-4047cfbef514&quot;,&quot;size&quot; :{&quot;width&quot;: &quot;970px&quot;,&quot;height&quot; : &quot;250px&quot;},&quot;allowedSizes&quot; :[],&quot;allowedDomains&quot; :  [&quot;g-ecx.images-amazon.com&quot;],&quot;aanParams&quot; :   &quot;site%3Damazon.es%3Bpt%3DDetail%3Bslot%3Ddp-ads-center-promo%3Bpid%3D8408197401%3Bq%3Dyo%20julia%3Bbn%3D599364031%3Barid%3Df1a8c8233ce0462db106774f4ce77b0f&quot;,&quot;loadAfter&quot; :   &quot;criticalFeature&quot;,&quot;extraDelay&quot; :  0,&quot;iframeExtraStyle&quot;: &quot;&quot;,&quot;iframeClass&quot;:  &quot;&quot;,&quot;adPixels&quot;: [],&quot;adPixelDelay&quot;: &quot;0&quot;,&quot;aaxInstrPixelUrl&quot;: &quot;&quot;,&quot;serverSideFetchAd&quot;: &quot;false&quot;,&quot;enableAdBlockerDetector&quot;: false,&quot;disableResizeFunc&quot;: true,&quot;fallbackStaticAdImgUrl&quot;: &quot;&quot;,&quot;fallbackStaticAdClickUrl&quot;: &quot;&quot;,&quot;fallbackStaticAdExtraStyle&quot;: &quot;&quot;,&quot;adFeedbackInfo&quot;: {&quot;endPoint&quot;: &quot;/gp/aq-feedback/lazyLoad/handler/af-link-handler.html&quot;,&quot;boolFeedback&quot;: true,&quot;slugText&quot;: &quot;Patrocinado&quot;},&quot;adPlacementMetaData&quot;: {&quot;searchTerms&quot;: &quot;eW8ganVsaWE=&quot;,&quot;pageUrl&quot;: &quot;aHR0cHM6Ly93d3cuYW1hem9uLmVzL2dwL3Byb2R1Y3QvODQwODE5NzQwMT9yZWYlNUY9c3IlNUYxJTVGMSZjcmlkPTJJS08wNjdVOTU0TkEmZGNoaWxkPTEma2V5d29yZHM9eW8lMjBqdWxpYSZxaWQ9MTU5ODU0MzE3NSZzcHJlZml4PXlvJTIwanVsaWElMkNhcHMlMkMyMTAmc3I9OC0x&quot;,&quot;adElementId&quot;: &quot;ape_Detail_dp-ads-center-promo_Desktop_placement&quot;,&quot;pageType&quot;: &quot;Detail&quot;,&quot;slotName&quot;: &quot;dp-ads-center-promo&quot;},&quot;adCreativeMetaData&quot;: {&quot;adNetwork&quot;: &quot;cs&quot;},&quot;advertisementStyle&quot;: {&quot;position&quot;: &quot;absolute&quot;,&quot;top&quot;: &quot;2px&quot;,&quot;right&quot;: &quot;0px&quot;,&quot;display&quot;: &quot;inline-block&quot;,&quot;font&quot;: &quot;normal 11px Arial&quot;,&quot;color&quot;: &quot;grey&quot;},&quot;feedbackDivStyle&quot;: {&quot;position&quot;: &quot;relative&quot;,&quot;height&quot;: &quot;14px&quot;,&quot;top&quot;: &quot;2px&quot;},&quot;viewabilityStandards&quot;: [{&quot;p&quot;: 0, &quot;t&quot;: 0, &quot;def&quot;: &quot;amzn&quot;}, {&quot;p&quot;: 30, &quot;t&quot;: 1, &quot;def&quot;: &quot;iab&quot;}, {&quot;p&quot;: 100, &quot;t&quot;: 1, &quot;def&quot;: &quot;groupm&quot;}],&quot;ajaxWeblabTriggerId&quot;: &quot;&quot;,&quot;abpStatus&quot;: &quot;1&quot;,&quot;abpAcceptable&quot;: &quot;true&quot;,&quot;programIdsToCollapse&quot;: [],&quot;DAsfUrl&quot;:&quot;https://images-eu.ssl-images-amazon.com/images/G/30/ape/sf/desktop/DAsf-1.50.0468965._V406311635_.js&quot;}" aria-hidden="true" data-arid="f1a8c8233ce0462db106774f4ce77b0f" data-csa-c-id="wq8fn-eoyxa8-xgs2al-yyuz6i" data-cel-widget="adplacements:Detail:dp-ads-center-promo:Desktop">
          <iframe name="{&quot;slot&quot;:&quot;Detail_dp-ads-center-promo_Desktop&quot;,&quot;pageType&quot;:&quot;Detail&quot;,&quot;subPageType&quot;:&quot;Desktop&quot;,&quot;slotName&quot;:&quot;dp-ads-center-promo&quot;,&quot;src&quot;:&quot;https://aax-eu.amazon.es/e/xsp/getAd?placementId=d5e5e614-eb00-48e7-9be3-4047cfbef514&amp;src=509&amp;slot=dp-ads-center-promo&amp;rid=01016a8a950980780df6f20da107a20ce7db50cfe43fef2e65a663abdd989d082d6f&amp;rj=%7B%7D&quot;,&quot;adServer&quot;:&quot;cs&quot;,&quot;campaignId&quot;:&quot;4805&quot;,&quot;arid&quot;:&quot;f1a8c8233ce0462db106774f4ce77b0f&quot;,&quot;placementId&quot;:&quot;d5e5e614-eb00-48e7-9be3-4047cfbef514&quot;,&quot;size&quot;:{&quot;width&quot;:&quot;970px&quot;,&quot;height&quot;:&quot;250px&quot;},&quot;allowedSizes&quot;:[{&quot;width&quot;:&quot;970px&quot;,&quot;height&quot;:&quot;250px&quot;}],&quot;allowedDomains&quot;:[&quot;g-ecx.images-amazon.com&quot;,&quot;d3l3lkinz3f56t.cloudfront.net&quot;,&quot;g-ecx.images-amazon.com&quot;,&quot;z-ecx.images-amazon.com&quot;,&quot;images-na.ssl-images-amazon.com&quot;,&quot;g-ec4.images-amazon.com&quot;,&quot;images-cn.ssl-images-amazon.com&quot;],&quot;aanParams&quot;:&quot;site%3Damazon.es%3Bpt%3DDetail%3Bslot%3Ddp-ads-center-promo%3Bpid%3D8408197401%3Bq%3Dyo%20julia%3Bbn%3D599364031%3Barid%3Df1a8c8233ce0462db106774f4ce77b0f&quot;,&quot;loadAfter&quot;:&quot;criticalFeature&quot;,&quot;extraDelay&quot;:0,&quot;iframeExtraStyle&quot;:&quot;&quot;,&quot;iframeClass&quot;:&quot;&quot;,&quot;adPixels&quot;:[],&quot;adPixelDelay&quot;:&quot;0&quot;,&quot;aaxInstrPixelUrl&quot;:&quot;&quot;,&quot;serverSideFetchAd&quot;:&quot;false&quot;,&quot;enableAdBlockerDetector&quot;:false,&quot;disableResizeFunc&quot;:true,&quot;fallbackStaticAdImgUrl&quot;:&quot;&quot;,&quot;fallbackStaticAdClickUrl&quot;:&quot;&quot;,&quot;fallbackStaticAdExtraStyle&quot;:&quot;&quot;,&quot;adFeedbackInfo&quot;:{&quot;endPoint&quot;:&quot;/gp/aq-feedback/lazyLoad/handler/af-link-handler.html&quot;,&quot;boolFeedback&quot;:true,&quot;slugText&quot;:&quot;Patrocinado&quot;},&quot;adPlacementMetaData&quot;:{&quot;searchTerms&quot;:&quot;eW8ganVsaWE=&quot;,&quot;pageUrl&quot;:&quot;aHR0cHM6Ly93d3cuYW1hem9uLmVzL2dwL3Byb2R1Y3QvODQwODE5NzQwMT9yZWYlNUY9c3IlNUYxJTVGMSZjcmlkPTJJS08wNjdVOTU0TkEmZGNoaWxkPTEma2V5d29yZHM9eW8lMjBqdWxpYSZxaWQ9MTU5ODU0MzE3NSZzcHJlZml4PXlvJTIwanVsaWElMkNhcHMlMkMyMTAmc3I9OC0x&quot;,&quot;adElementId&quot;:&quot;ape_Detail_dp-ads-center-promo_Desktop_placement&quot;,&quot;pageType&quot;:&quot;Detail&quot;,&quot;slotName&quot;:&quot;dp-ads-center-promo&quot;},&quot;adCreativeMetaData&quot;:{&quot;adNetwork&quot;:&quot;cs&quot;},&quot;advertisementStyle&quot;:{&quot;position&quot;:&quot;absolute&quot;,&quot;top&quot;:&quot;2px&quot;,&quot;right&quot;:&quot;0px&quot;,&quot;display&quot;:&quot;inline-block&quot;,&quot;font&quot;:&quot;normal 11px Arial&quot;,&quot;color&quot;:&quot;grey&quot;},&quot;feedbackDivStyle&quot;:{&quot;position&quot;:&quot;relative&quot;,&quot;height&quot;:&quot;14px&quot;,&quot;top&quot;:&quot;2px&quot;},&quot;viewabilityStandards&quot;:[{&quot;p&quot;:0,&quot;t&quot;:0,&quot;def&quot;:&quot;amzn&quot;},{&quot;p&quot;:30,&quot;t&quot;:1,&quot;def&quot;:&quot;iab&quot;},{&quot;p&quot;:100,&quot;t&quot;:1,&quot;def&quot;:&quot;groupm&quot;}],&quot;ajaxWeblabTriggerId&quot;:&quot;&quot;,&quot;abpStatus&quot;:&quot;1&quot;,&quot;abpAcceptable&quot;:&quot;true&quot;,&quot;programIdsToCollapse&quot;:[],&quot;DAsfUrl&quot;:&quot;https://images-eu.ssl-images-amazon.com/images/G/30/ape/sf/desktop/DAsf-1.50.0468965._V406311635_.js&quot;,&quot;hostDomain&quot;:&quot;https://www.amazon.es&quot;,&quot;queryParams&quot;:{},&quot;aPageStart&quot;:1598543180001,&quot;adStartTime&quot;:1598543181596,&quot;safeFrameSrc&quot;:&quot;https://images-eu.ssl-images-amazon.com/images/G/30/ape/sf/whitelisted/desktop/sf-1.50.0468965._V406311632_.html&quot;,&quot;collectSafeframeRTD&quot;:false}" id="ape_Detail_dp-ads-center-promo_Desktop_iframe" src="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/sf-1.50.0468965._V406311632_.html" height="250px" width="970px" scrolling="no" data-arid="f1a8c8233ce0462db106774f4ce77b0f" sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-top-navigation-by-user-activation" >
          </iframe><div id="ape_Detail_dp-ads-center-promo_Desktop_placement_Feedback" style={{ position: "relative", height: "14px", top: "2px" }}><a data-a-modal="{&quot;url&quot;:&quot;/gp/aq-feedback/lazyLoad/handler/af-form-handler.html?pl=%7B%22adPlacementMetaData%22%3A%7B%22searchTerms%22%3A%22eW8ganVsaWE%3D%22%2C%22pageUrl%22%3A%22aHR0cHM6Ly93d3cuYW1hem9uLmVzL2dwL3Byb2R1Y3QvODQwODE5NzQwMT9yZWYlNUY9c3IlNUYxJTVGMSZjcmlkPTJJS08wNjdVOTU0TkEmZGNoaWxkPTEma2V5d29yZHM9eW8lMjBqdWxpYSZxaWQ9MTU5ODU0MzE3NSZzcHJlZml4PXlvJTIwanVsaWElMkNhcHMlMkMyMTAmc3I9OC0x%22%2C%22adElementId%22%3A%22ape_Detail_dp-ads-center-promo_Desktop_placement%22%2C%22pageType%22%3A%22Detail%22%2C%22slotName%22%3A%22dp-ads-center-promo%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adNetwork%22%3A%22cs%22%2C%22adProgramId%22%3A1001%2C%22adImpressionId%22%3A%22https%3A%2F%2Faax-eu.amazon.es%2Fe%2Fxsp%2Fimp%3Fb%3DQkR17uybCfzLAjDB-5iryVQAAAF0MJkwOgMAAAH9AXr_C_Q%22%2C%22adCreativeId%22%3A8524871902%2C%22adCreativeTemplateName%22%3A%22Image%22%2C%22adId%22%3A3076118402%7D%7D&amp;daFlg=false&amp;ie=UTF-8&quot;,     &quot;name&quot;:&quot;shared-placement-feedback-modal-dp-ads-center-promo&quot;,&quot;header&quot;:&quot;Comparte tus comentarios&quot;,&quot;width&quot;:&quot;460&quot;}" style={{
            position: "absolute", top: "2px", right: "0px", display: "inline-block", font: "11px 'Amazon Ember Regular', 'Amazon Ember', 'Arial' !important", color: "rgb(85, 85, 85)",
            cursor: "pointer", textDecoration: "none"
          }} data-action="a-modal" className="a-declarative">
            <span style={{ textDecoration: "none" }} id="ad-feedback-text-dp-ads-center-promo" aria-hidden="false" aria-label="Dejar comentarios sobre el anuncio patrocinado"> Patrocinado
            <b id="ad-feedback-sprite-dp-ads-center-promo" style={{ display: "inline-block", verticalAlign: "top", margin: "1px 0px", width: "14px", height: "12px", background: "transparent url(&quot;https://images-na.ssl-images-amazon.com/images/G/30/ad-feedback/info_icon_1Xsprite._CB431020337_.png&quot;) no-repeat scroll 0px 0px" }}></b></span></a></div></div><div style={{ marginBottom: "10px" }}></div> */}
        <RelatedProducts2 />
        <a id="customerReviews" aria-label="Reseñas más importantes" className="a-link-normal" href="https://www.amazon.es/Yo-Julia-Planeta-Espa%C3%B1oles-Iberoamericanos/dp/8408197401/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp;crid=2IKO067U954NA&amp;dchild=1&amp;keywords=yo+julia&amp;qid=1598543175&amp;sprefix=yo+julia%2Caps%2C210&amp;sr=8-1#"></a>
        <hr aria-hidden="true" className="a-spacing-large a-divider-normal" />
        <span className="cr-widget-PageState">
          <span id="cr-state-object" data-state="{&quot;asin&quot;:&quot;8408197401&quot;,&quot;customerId&quot;:&quot;0&quot;,&quot;deviceType&quot;:&quot;desktop&quot;,&quot;contextId&quot;:&quot;&quot;,&quot;reviewCommentsAjaxUrl&quot;:&quot;&quot;,&quot;reviewCommentSubmissionAjaxUrl&quot;:&quot;&quot;,&quot;approvedAuthorAjaxUrl&quot;:&quot;&quot;,&quot;reviewsAjaxUrl&quot;:&quot;/hz/reviews-render/ajax/medley-filtered-reviews/get/&quot;,&quot;medleyReviewsAjaxUrl&quot;:&quot;/hz/reviews-render/ajax/medley-reviews/get/&quot;,&quot;reviewerType&quot;:&quot;&quot;,&quot;formatType&quot;:&quot;&quot;,&quot;filterByKeyword&quot;:&quot;&quot;,&quot;filterByLanguage&quot;:&quot;&quot;,&quot;filterByStar&quot;:&quot;&quot;,&quot;filterByHeight&quot;:&quot;&quot;,&quot;filterByWeight&quot;:&quot;&quot;,&quot;showLanguageFilter&quot;:false,&quot;showHeightFilter&quot;:false,&quot;languageOfPreference&quot;:&quot;es_ES&quot;,&quot;isCardTreatmentEnabled&quot;:false,&quot;lazyWidgetLoaderBufferPixels&quot;:&quot;1000&quot;,&quot;lazyWidgetLoaderDelayBeforeTriggering&quot;:&quot;5000&quot;,&quot;lazyWidgetLoaderUrl&quot;:&quot;/hz/reviews-render/ajax/lazy-widgets/stream&quot;,&quot;lazyWidgetCsrfToken&quot;:&quot;go8YfMPadNRFrvVnxIiiQyHRHmYluDuFXUwFPzwAAAABAAAAAF9H1UxyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&quot;,&quot;lazyWidgetDomainWhitelist&quot;:[&quot;amazon.com&quot;,&quot;amazon.ca&quot;,&quot;amazon.com.mx&quot;,&quot;amazon.com.br&quot;,&quot;amazon.co.uk&quot;,&quot;amazon.de&quot;,&quot;amazon.it&quot;,&quot;amazon.sa&quot;,&quot;amazon.com.tr&quot;,&quot;amazon.es&quot;,&quot;amazon.fr&quot;,&quot;amazon.in&quot;,&quot;amazon.ae&quot;,&quot;amazon.nl&quot;,&quot;amazon.co.jp&quot;,&quot;amazon.com.au&quot;,&quot;amazon.sg&quot;,&quot;amazon.cn&quot;],&quot;signinUrl&quot;:&quot;https://www.amazon.es/ap/signin?openid.return_to\u003dhttps%3A%2F%2Fwww.amazon.es%2FYo-Julia-Planeta-Espa%25C3%25B1oles-Iberoamericanos%2Fproduct-reviews%2F8408197401%3Fie%3DUTF8\u0026openid.identity\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026openid.claimed_id\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select\u0026openid.assoc_handle\u003desflex\u0026openid.mode\u003dcheckid_setup\u0026openid.ns\u003dhttp%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&quot;,&quot;reftagTriggerUrl&quot;:&quot;/hz/reviews-render/ajax/reftag-trigger&quot;,&quot;mobileImageGalleryUrl&quot;:&quot;&quot;,&quot;getImagesAjaxUrl&quot;:&quot;&quot;,&quot;productInfoUrl&quot;:&quot;&quot;,&quot;disableScroll&quot;:false,&quot;onLoadShowHideElements&quot;:&quot;#cm-cr-dp-reviews-loading-wrapper,.cr-reviews-loading&quot;}"></span>
        </span>
        <input type="hidden" name="" value="https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/js/airy.skin._CB485981857_.js" id="cr-airy-js-source-url" />
        <input type="hidden" name="" value="https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/css/beacon._CB485971591_.css" id="cr-airy-css-source-url" />
        <input type="hidden" name="" value="https://m.media-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/flash/AiryBasicRenderer._CB485925577_.swf" id="cr-video-swf-url" />

        {/* <link rel="stylesheet" href="./Yo, Julia_ Premio Planeta 2018 Autores Españoles e Iberoamericanos_ Amazon.es_ Posteguillo, Santiago_ Libros_files/01STrEog8JL._RC_015DCfR+jFL.css,01LK.css" /> */}
        <Reviews />
        {/* <div id="books-entity-teaser"></div> */}
        {/* <div style={{ display: "none" }}>
            <div id="nav-prime-tooltip">
              <div className="nav-npt-text-title"> Amazon Prime: envíos rápidos, GRATIS e ilimitados y mucho más </div>
              <div className="nav-npt-text-detail"> Los clientes de Amazon Prime disfrutan de Envío en 1 día GRATIS en dos millones de productos y Envío en 2 o 3 días en millones de productos más, Acceso a series y películas en Prime Video, incluyendo las series Amazon Originals, más de 2 millones de canciones y cientos de listas de reproducción sin publicidad con Prime Music, cientos de eBooks en Prime Reading, Acceso Prioritario a las Ofertas flash y Almacenamiento de fotos gratis e ilimitado en Amazon Drive. </div>
              <div className="nav-npt-text-detail">
                &gt;
                <a className="nav-npt-a" href="https://www.amazon.es/prime/ref=nav_tooltip_redirect">Más información</a>
              </div>
            </div>
          </div> */}
        {/* <div style={{ display: "none" }}>
            <div id="nav-prime-menu" className="nav-empty nav-flyout-content nav-ajax-prime-menu">
              <div className="nav_dynamic"></div>
              <div className="nav-ajax-message"></div>
              <div className="nav-ajax-error-msg">
                <p className="nav_p nav-bold">Hay un problema para cargar este menú.</p>
                <p className="nav_p"><a href="https://www.amazon.es/gp/prime/ref=nav_prime_ajax_err" className="nav_a">Más información sobre Amazon Prime.</a></p>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Body;