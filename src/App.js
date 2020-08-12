import React from 'react';
import Header from '../src/components/Header'
import Slider from '../src/components/Slider'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
       <Header  />
       <Slider imageOne={{backgroundImage: 'url(images/rene2.jpg)'}} title="Rene's tire service" />
       <Services />
       <Statistics />
       <Footer />
    </div>
  );
}

export default App;
