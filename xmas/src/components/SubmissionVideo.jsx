import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import submissionVideo from '../assets/background2.mp4'; 

function SubmissionVideo() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, wish } = location.state;

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate('/wish', { state: { name, wish } });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, name, wish]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video 
        className="w-full h-full object-cover"
        src={submissionVideo}
        autoPlay
        muted 
      />
    </div>
  );
}

export default SubmissionVideo;
