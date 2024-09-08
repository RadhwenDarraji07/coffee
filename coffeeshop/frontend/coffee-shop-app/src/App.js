import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Stats from './components/stats';
import MapCoffee from './components/MapCoffee';
import Team from './components/OurTeam';
import Prods from './pages/Prods'; // Import the Prods component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={
            <main>
              <ProductList />
              <Stats />
              <Team />
              <MapCoffee />
            </main>
          } />
          <Route path="/prods" element={<Prods />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
