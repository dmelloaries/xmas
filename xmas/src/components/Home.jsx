import React from 'react';
import Hero from './Hero';
import WishForm from './WishForm';
import Footer from './Footer';
import backgroundVideo from '../assets/background.mp4'; 
function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-400 to-blue-900">
     
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
    
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      
      
      <div className="relative z-20">
        <Hero />
        <WishForm />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
