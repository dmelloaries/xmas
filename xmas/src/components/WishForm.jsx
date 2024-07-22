import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function WishForm() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/submission-video', { state: { name, wish } });
  };

  useEffect(() => {
    const loadParticles = async () => {
      const particles = await loadFull(tsParticles);
      particles.load("tsparticles", {
        particles: {
          number: {
            value: 200,
          },
          size: {
            value: 3,
          },
          move: {
            direction: "bottom",
            outMode: "out",
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        background: {
          color: "#000000",
        },
      });
    };
    loadParticles();
  }, []);

  return (
    <div className="relative">
      <Particles id="tsparticles" />
      <div className="max-w-md mx-auto bg-purple-500 bg-opacity-50 p-8 rounded-lg shadow-lg mt-10 transform transition-transform hover:scale-105">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="wish">Wish</label>
            <textarea
              id="wish"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default WishForm;
