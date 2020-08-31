import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import reducer from './reducer';

const App = () => {
  const store = createStore(reducer);

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
