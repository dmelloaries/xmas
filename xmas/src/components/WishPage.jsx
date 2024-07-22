import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';
import 'tailwindcss/tailwind.css';
import xmasAudio from '../assets/xmas.mp3'; 

function WishPage() {
  const location = useLocation();
  const { name, wish } = location.state;
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Failed to play audio:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7--OwhVZ-ZGpjwYRPXoxWbyDZZ8du1HprOg&s")',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat'
    }}>
      <audio ref={audioRef} src={xmasAudio} loop />
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg border-4 border-red-500 text-center max-w-lg mx-auto">
        
        <img
          src="https://media.tenor.com/FUKWaGeUorUAAAAi/christmas-decoration.gif"
          alt="Christmas Decoration"
          className="absolute top-0 left-0 w-16 h-16"
        />
        <img
          src="https://www.animatedimages.org/data/media/1075/animated-christmas-gift-image-0001.gif"
          alt="Christmas Decoration"
          className="absolute top-0 right-0 w-16 h-16"
        />
        
        
        <Zoom>
          <h1 className="text-5xl font-bold mb-4 text-red-500" style={{ fontFamily: 'Pacifico, cursive' }}>
            Merry Christmas, {name}!
          </h1>
        </Zoom>
        
        <Fade bottom>
          <p className="text-4xl text-green-600 mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>{wish}</p>
        </Fade>
      </div>
    </div>
  );
}

export default WishPage;
