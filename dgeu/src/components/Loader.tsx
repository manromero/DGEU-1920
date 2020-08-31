import React from 'react';
import useStyles from '../styles/Loader';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.loader} />
    </div>
  );
}

export default Loader;