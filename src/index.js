import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind-output.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Header from './components/header';
import Container from './components/Layout/index.js';
import Carousel from './components/carousel/carousel';
import Number from './components/numberDiv';
import Salery from './components/salerySection';
import Team from './components/team/team';
import Component from './components/3rdLastComponent';
import Hero from './components/hero';
import Footer from './components/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Container />
    <Carousel />
    <Number />
    <Salery />
    <Team />
    <Component />
    <Hero />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
