import React, { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';

// Lazy load non-critical components
const Container = lazy(() => import('../components/Layout/index.js'));
const Carousel = lazy(() => import('../components/carousel/carousel'));
const Number = lazy(() => import('../components/numberDiv'));
const Salery = lazy(() => import('../components/salerySection'));
const Team = lazy(() => import('../components/team/team'));
const Component = lazy(() => import('../components/3rdLastComponent'));
const Hero = lazy(() => import('../components/hero'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling when navigated from another page
    if (location.state?.scrollTo) {
      const sectionMap = {
        'how-it-works': 'how-it-works',
        'pricing': 'pricing',
        'roles': 'roles',
        'our-promise': 'testimonials'
      };
      
      const targetId = sectionMap[location.state.scrollTo.toLowerCase().replace(/\s+/g, '-')];
      
      // Wait a bit for components to load
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Container />
        <Carousel />
        <Number />
        <Salery />
        <Team />
        <Component />
        <Hero />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;