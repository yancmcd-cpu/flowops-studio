import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SalesCopy from './components/SalesCopy';
import Positioning from './components/Positioning';
import UseCases from './components/UseCases';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SalesCopy />
        <Positioning />
        <UseCases />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
