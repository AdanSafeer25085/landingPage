import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const sendToAnalytics = (metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value);
    
    // Add performance warnings
    switch(metric.name) {
      case 'LCP':
        if (metric.value > 2500) {
          console.warn('[Performance] LCP is above 2.5s - Consider optimizing largest contentful paint');
        }
        break;
      case 'FID':
        if (metric.value > 100) {
          console.warn('[Performance] FID is above 100ms - Consider optimizing JavaScript execution');
        }
        break;
      case 'CLS':
        if (metric.value > 0.1) {
          console.warn('[Performance] CLS is above 0.1 - Consider fixing layout shifts');
        }
        break;
      case 'FCP':
        if (metric.value > 1800) {
          console.warn('[Performance] FCP is above 1.8s - Consider optimizing first contentful paint');
        }
        break;
      case 'TTFB':
        if (metric.value > 800) {
          console.warn('[Performance] TTFB is above 800ms - Consider optimizing server response time');
        }
        break;
      default:
        break;
    }
  }

  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // You can also send to your own analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name: metric.name,
  //     value: metric.value,
  //     delta: metric.delta,
  //     id: metric.id,
  //     entries: metric.entries,
  //   }),
  // });
};

export const measureWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

// Custom performance marks for specific actions
export const markPerformance = (markName) => {
  if (performance.mark) {
    performance.mark(markName);
    console.log(`[Performance Mark] ${markName}`);
  }
};

// Measure time between marks
export const measurePerformance = (measureName, startMark, endMark) => {
  if (performance.measure) {
    try {
      performance.measure(measureName, startMark, endMark);
      const measures = performance.getEntriesByName(measureName);
      if (measures.length > 0) {
        console.log(`[Performance Measure] ${measureName}: ${measures[0].duration}ms`);
      }
    } catch (error) {
      console.error('Performance measurement error:', error);
    }
  }
};

// Monitor resource loading
export const monitorResources = () => {
  if (window.PerformanceObserver) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          if (entry.duration > 1000) {
            console.warn(`[Slow Resource] ${entry.name} took ${entry.duration}ms to load`);
          }
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }
};

// Initialize all monitoring
export const initPerformanceMonitoring = () => {
  measureWebVitals();
  monitorResources();
  
  // Log initial page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`[Performance] Total page load time: ${loadTime}ms`);
    
    if (loadTime > 3000) {
      console.warn('[Performance] Page load time is above 3s - Consider further optimizations');
    }
  });
};