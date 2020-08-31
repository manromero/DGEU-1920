import React from 'react';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';
import KindleRecommendation from './KindleRecommendation';
import Reviews from './Reviews';
import PreloadPopUp from './PreloadPopUp';
import RightPanel from './RightPanel';
import MainProductInformation from './MainProductInformation';
import SitbReaderPlaceholder from './SitbReaderPlaceholder';
import Articles from './Articles';
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
        <Articles
          title="¿Qué otros productos compran los clientes tras ver este producto?"
          articlesPerPage={4}
        />
        <Articles
          title="Productos patrocinados relacionados con este artículo"
          articlesPerPage={6}
        />
        <PreloadPopUp />
        <ProductDescription />
        <KindleRecommendation />
        <ProductDetails />
        <Articles
          title="Más artículos por descubrir"
          articlesPerPage={6}
        />
        <Articles
          title="Productos patrocinados relacionados con este artículo"
          articlesPerPage={6}
        />
        <hr aria-hidden="true" className="a-spacing-large a-divider-normal" />
        <Reviews />
      </div>
    </div>
  );
}

export default Body;