import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Stats from './components/stats';

function App() {
  return (
    <div className="App">
      <main>
        <ProductList />
        <Stats />
      </main>
    </div>
  );
}

export default App;
