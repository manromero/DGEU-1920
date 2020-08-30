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
      <KindlePop />
      <a href="https://www.amazon.es/Yo-Julia-Planeta-Volumen-independiente-ebook/dp/B07JK6ZS94"></a>
      <Breadcrumbs />
      <div id="dp-container" className="a-container" role="main">
        <RightPanel />
        <LeftPanel />
        <MainProductInformation />
        <SitbReaderPlaceholder />
        <hr className="bucketDivider" />
        <SpecialOffers />
        <BoughtTogether />
        <OtherCustomerProducts />
        <RelatedProducts />
        <PreloadPopUp />
        <ProductDescription />
        <KindleRecommendation />
        <ProductDetails />
        <ArticlesToDiscover />
        <hr className="a-divider-normal" />
        <RelatedProducts2 />
        <hr aria-hidden="true" className="a-spacing-large a-divider-normal" />
        <Reviews />
      </div>
    </div>
  );
}

export default Body;