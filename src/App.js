import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import Routes instead of Switch
import LandingPage from './LandingPage';

const App = () => {
  // App component logic here
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
