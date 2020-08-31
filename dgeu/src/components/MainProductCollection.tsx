import React from 'react';
import useStyles from '../styles/MainProductCollection';

interface IProps {
  collectionName: string;
  collectionUrl: string;
}

const MainProductCollection = ({ collectionUrl, collectionName }: IProps) => {
  const classes = useStyles();
  return (
    <div>
      <span className={classes.book}>Libro 1</span><span className={classes.collection}> de 2 en la colección </span>
      <a href={collectionUrl}>
        <span className={classes.collectionName}>{collectionName}</span>
      </a>
    </div>
  );
}

export default MainProductCollection;