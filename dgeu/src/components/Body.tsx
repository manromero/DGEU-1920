import React, { useEffect } from 'react';
import KindleRecommendation from './KindleRecommendation';
import PreloadPopUp from './PreloadPopUp';
import RightPanel from './RightPanel';
import SitbReaderPlaceholder from './SitbReaderPlaceholder';
import SpecialOffers from './SpecialOffers';
import BoughtTogether from './BoughtTogether';
import Breadcrumbs from './Breadcrumbs';
import LeftPanel from './LeftPanel';
import KindlePop from './KindlePop';
import SponsoredArticles1 from '../containers/SponsoredArticles1';
import OthersCustomersArticles from '../containers/OthersCustomersArticles';
import UndiscoveredArticles from '../containers/UndiscoveredArticles';
import Loader from './Loader';
import InformationTabs from '../containers/InformationTabs';

interface IProps {
  dataLoaded: boolean;
  opeLoadData: () => void;
}

const Body = ({ dataLoaded, opeLoadData }: IProps) => {

  // Similar componentDidMount y componentDidUpdate
  useEffect(() => {
    // Intilialize data
    opeLoadData();
  });

  if (!dataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div id="dp" className="book es_ES">
      <KindlePop />
      <a href="https://www.amazon.es/Yo-Julia-Planeta-Volumen-independiente-ebook/dp/B07JK6ZS94"></a>
      <Breadcrumbs />
      <div id="dp-container" className="a-container" role="main">
        <RightPanel />
        <LeftPanel />
        <InformationTabs />
        <SitbReaderPlaceholder />
        <hr className="bucketDivider" />
        <SpecialOffers />
        <BoughtTogether />
        <OthersCustomersArticles
          title="¿Qué otros productos compran los clientes tras ver este producto?"
          articlesPerPage={4}
        />
        <SponsoredArticles1
          title="Productos patrocinados relacionados con este artículo"
          articlesPerPage={6}
        />
        <PreloadPopUp />
        <KindleRecommendation />
        <UndiscoveredArticles
          title="Más artículos por descubrir"
          articlesPerPage={6}
        />
      </div>
    </div>
  );
}

export default Body;