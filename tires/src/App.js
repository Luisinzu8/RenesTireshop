import React from 'react';
import Header from '../src/components/Header'
import Slider from '../src/components/Slider'
import Navigation from './components/Navigation'



function App() {
  return (
    <div className="App">
       <Header  />
       <Slider imageOne={{backgroundImage: 'url(images/rene2.jpg)'}} title="Rene's tire service" />
    </div>
  );
}

export default App;
