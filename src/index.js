import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tailwind-output.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Header from './components/header';
import Container from './components/Layout';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
