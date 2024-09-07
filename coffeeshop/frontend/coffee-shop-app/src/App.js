import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Stats from './components/stats';
import MapCoffee from './components/MapCoffee';

function App() {
  return (
    <div className="App">
      <main>
        <ProductList />
        <Stats />
        <MapCoffee />
      </main>
    </div>
  );
}

export default App;
