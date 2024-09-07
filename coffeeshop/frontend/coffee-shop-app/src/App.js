import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Stats from './components/stats';
import MapCoffee from './components/MapCoffee';
import Team from './components/OurTeam'
import Prod from './components/Prods'

function App() {
  return (
    <div className="App">
      <main>
        <ProductList />
        <Stats />
        <Team/>
        <MapCoffee />
        <Prod/>
      </main>
    </div>
  );
}

export default App;
