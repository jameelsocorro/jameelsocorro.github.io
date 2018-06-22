import './app-styles';
import React, { Component, Fragment } from 'react';

import Home from './modules/home';
import About from './modules/about';
import Work from './modules/work';
import Contact from './modules/contact';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <About />
        <Work />
        <Contact />
      </Fragment>
    );
  }
}

export default App;
