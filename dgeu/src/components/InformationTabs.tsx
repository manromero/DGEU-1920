import React from 'react';
import MainProductTitle from './MainProductTitle';
import MainProductAuthor from './MainProductAuthor';
import MainProductReview from './MainProductReview';
import MainProductCollection from './MainProductCollection';
import useStyles from '../styles/InformationTabs';

interface IProps {
  title: string;
  subtitle: string;
  author: string;
  authorUrl: string;
  collectionName: string;
  collectionUrl: string;
  numberOpinions: number;
  rating: number;
}

const InformationTabs = (props: IProps) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MainProductTitle title={props.title} subtitle={props.subtitle} />
      <MainProductAuthor author={props.author} authorUrl={props.authorUrl} />
      <MainProductReview rating={props.rating} numberOpinions={props.numberOpinions} />
      <MainProductCollection collectionName={props.collectionName} collectionUrl={props.collectionUrl} />
      {/* Tab options */}
      <div className={classes.tabHeader}>
        <button className={classes.tabHeaderButton}>Resumen</button>
        <button className={classes.tabHeaderButton}>Características</button>
        <button className={classes.tabHeaderButton}>Opiniones de Clientes</button>
      </div>
      {/* Tab Content */}
      <div>
        <h1>Este es el contenido del tab</h1>
      </div>
    </div>
  );
}

export default InformationTabs;