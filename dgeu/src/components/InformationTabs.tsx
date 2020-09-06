import React from 'react';
import MainProductTitle from './MainProductTitle';
import MainProductAuthor from './MainProductAuthor';
import MainProductReview from './MainProductReview';
import MainProductCollection from './MainProductCollection';
import useStyles from '../styles/InformationTabs';
import ProductDetails from '../containers/ProductDetails';
import MainProductInformation from '../containers/MainProductInformation';
import ProductDescription from '../containers/ProductDescription';
import ReviewsBox from './ReviewsBox';

interface IProps {
  title: string;
  subtitle: string;
  author: string;
  authorUrl: string;
  collectionName: string;
  collectionUrl: string;
  numberOpinions: number;
  rating: number;
  activeTab: number;
  acSetActiveTab: (activeTab: number) => void;
}

const InformationTabs = (props: IProps) => {

  const { activeTab, acSetActiveTab } = props;

  let componentToRender = (<h1>Not defined</h1>);

  if (activeTab === 0) {
    componentToRender = (<MainProductInformation />);
  } else if (activeTab === 1) {
    componentToRender = (<ProductDescription />);
  } else if (activeTab === 2) {
    componentToRender = (<ProductDetails />);
  } else {
    componentToRender = (<ReviewsBox />);
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MainProductTitle title={props.title} subtitle={props.subtitle} />
      <MainProductAuthor author={props.author} authorUrl={props.authorUrl} />
      <MainProductReview rating={props.rating} numberOpinions={props.numberOpinions} acSetActiveTab={acSetActiveTab} />
      <MainProductCollection collectionName={props.collectionName} collectionUrl={props.collectionUrl} />
      {/* Tab options */}
      <div className={classes.tabHeader}>
        <button className={activeTab === 0 ? classes.tabHeaderButtonActive : classes.tabHeaderButton} onClick={() => acSetActiveTab(0)}>Resumen</button>
        <button className={activeTab === 1 ? classes.tabHeaderButtonActive : classes.tabHeaderButton} onClick={() => acSetActiveTab(1)}>Descripción</button>
        <button className={activeTab === 2 ? classes.tabHeaderButtonActive : classes.tabHeaderButton} onClick={() => acSetActiveTab(2)}>Detalles</button>
        <button className={activeTab === 3 ? classes.tabHeaderButtonActive : classes.tabHeaderButton} onClick={() => acSetActiveTab(3)}>Opiniones de Clientes</button>
      </div>
      {/* Tab Content */}
      <div className={classes.tabBody}>
        {componentToRender}
      </div>
    </div>
  );
}

export default InformationTabs;