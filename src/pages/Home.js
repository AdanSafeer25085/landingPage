import React, { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import Header from '../components/header';
import Footer from '../components/footer';

// Lazy load non-critical components with preload hints
const Container = lazy(() => 
  import(/* webpackChunkName: "container" */ '../components/Layout/index.js')
);
const Carousel = lazy(() => 
  import(/* webpackChunkName: "carousel" */ '../components/carousel/carousel')
);
const Number = lazy(() => 
  import(/* webpackChunkName: "number" */ '../components/numberDiv')
);
const Salery = lazy(() => 
  import(/* webpackChunkName: "salary" */ '../components/salerySection')
);
const Team = lazy(() => 
  import(/* webpackChunkName: "team" */ '../components/team/team')
);
const Component = lazy(() => 
  import(/* webpackChunkName: "component" */ '../components/3rdLastComponent')
);
const Hero = lazy(() => 
  import(/* webpackChunkName: "hero" */ '../components/hero')
);

// Optimized loading component with reduced layout shift
const LoadingSpinner = React.memo(() => (
  <div className="flex justify-center items-center h-32 min-h-[8rem]">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-900"></div>
  </div>
));

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