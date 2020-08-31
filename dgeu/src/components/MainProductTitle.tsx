import React from 'react';
import useStyles from '../styles/MainProductTitle';

interface IProps {
  title: string;
  subtitle: string;
}

const MainProductTitle = ({ title, subtitle }: IProps) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <h1 className={classes.title}>
          <span className={classes.productTitle}>
            {title}
          </span>
          <span className={classes.productSubtitle}>
            {' '}{subtitle}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default MainProductTitle;