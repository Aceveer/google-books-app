import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import BookCarousel from './Components/BookCarousel';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/" element={<BookCarousel query="romance" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
