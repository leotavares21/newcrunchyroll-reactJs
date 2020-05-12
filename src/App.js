import React, { Fragment } from 'react';

import Navbar from './components/Navbar/index';
import Carousel from './components/Carousel/index';
import PopularBar from './components/PopularBar/index';
import TrendBar from './components/TrendBar/index';
import Footer from './components/Footer/index';


function App() {

  return (
    <Fragment>
          <Navbar />
          <Carousel />
          <PopularBar />
          <TrendBar />
          <Footer />
    </Fragment>
  );
}

export default App;
