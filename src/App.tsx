import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default React.memo(App);
