import React from 'react';
import './App.css';

//Components
import Ticker from "./components/ticker";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutSection";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Ticker content="Get 20% off this month when you try our services!" background="black" />
          <Ticker content="1590 dundas street east, mississauga, ON l4x2z2, ca|(905) 615 1154" bg="white" />
          <Navbar />
          <AboutSection />
          {/* <div className="side-by-side">
            <Slideshow />
            <Map />
          </div> */}

      </div>
    );
  }
}

export default App;
