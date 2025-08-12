import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

const PageLayout = ({ children, showNav = true, showFooter = true }) => {
  return (
    <div className="min-h-screen bg-white">
      {showNav && <Nav />}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;