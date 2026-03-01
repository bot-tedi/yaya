import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSlider from './sections/HeroSlider';
import Programs from './sections/Programs';
import Donation from './sections/Donation';
import News from './sections/News';
import Portfolio from './sections/Portfolio';
import VideoProfile from './sections/VideoProfile';
import Transparency from './sections/Transparency';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSlider />
        <Programs />
        <Donation />
        <News />
        <Portfolio />
        <VideoProfile />
        <Transparency />
      </main>
      <Footer />
    </div>
  );
}

export default App;
