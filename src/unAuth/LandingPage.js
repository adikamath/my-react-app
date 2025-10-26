import React from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bumpups from './components/Bumpups';
import TimestampExtractor from './components/TimestampExtractor';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="container">
        <h1 className="hello-world">Hello World!!</h1>
        <p className="subtitle">Welcome to my first React app.</p>
        
        <div className="components-section">
          <Bumpups />
          <TimestampExtractor />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
