import React from 'react';
import Header from '../src/components/Header'
import Slider from '../src/components/Slider'
import Navigation from './components/Navigation'
import Services from './components/Services'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
       <Header  />
       <Slider imageOne={{backgroundImage: 'url(images/rene2.jpg)'}} title="Rene's tire service" />
       <Services />
       <Footer />
    </div>
  );
}

export default App;
