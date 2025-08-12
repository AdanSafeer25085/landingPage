import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useButtonAction = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartHiring = useCallback(() => {
    console.log('Start Hiring clicked');
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': 'Start Hiring'
      });
    }
    navigate('/contact');
  }, [navigate]);

  const handleBookCall = useCallback(() => {
    console.log('Book a Call clicked');
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': 'Book a Call'
      });
    }
    navigate('/book-call');
  }, [navigate]);

  const handleNavigation = useCallback((section) => {
    console.log(`Navigation to ${section} clicked`);
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Navigation',
        'event_label': section
      });
    }
    
    // If we're not on home page, navigate to home first then scroll
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
      return;
    }
    
    const sectionMap = {
      'how-it-works': 'how-it-works',
      'pricing': 'pricing',
      'roles': 'roles',
      'our-promise': 'testimonials'
    };
    
    const targetId = sectionMap[section.toLowerCase().replace(/\s+/g, '-')];
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [navigate, location.pathname]);

  const handleHome = useCallback(() => {
    console.log('Logo/Home clicked');
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Navigation',
        'event_label': 'Home Logo'
      });
    }
    
    // Navigate to home and scroll to top
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate, location.pathname]);

  return {
    handleStartHiring,
    handleBookCall,
    handleNavigation,
    handleHome
  };
};

export default useButtonAction;