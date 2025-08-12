import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BookCall from './pages/BookCall';
import './index.css';
import './tailwind-output.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-call" element={<BookCall />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;