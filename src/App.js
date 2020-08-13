import React from 'react';
import Header from '../src/components/Header'
import Slider from '../src/components/Slider'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoogleMap from './components/GoogleMap'
import Arrow from './components/Arrow'



function App() {
  return (
    <div className="App">
       <Header  />
       <Slider imageOne={{backgroundImage: 'url(images/rene2.jpg)'}} title="Rene's tire service" />
       <Services />
       <Statistics />
       <Arrow />
       <Contact />
       <Footer />
       <GoogleMap />
    </div>
  );
}

export default App;
