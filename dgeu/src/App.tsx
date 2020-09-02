import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Header from './components/Header';
import Body from './containers/Body';
import Footer from './components/Footer';
import reducer from './reducer';

const App = () => {
  const store = createStore(reducer,
    // Using redux-thunk to allow make async dispatch of actions
    compose(
      applyMiddleware(thunk)
    )
  );

  return (
    <React.Fragment>
      <Provider store={store}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </React.Fragment>
  );
}

export default App;
