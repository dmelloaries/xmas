import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WishPage from './components/WishPage';
import SubmissionVideo from './components/SubmissionVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/submission-video" element={<SubmissionVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
