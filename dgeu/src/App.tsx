import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myDiv: {
    backgroundColor: 'red'
  }
});

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.myDiv}>
      Hello world
    </div>
  );
}

export default App;
