import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Performance thresholds
const PERFORMANCE_THRESHOLDS = {
  LCP: 2500,
  FID: 100,
  CLS: 0.1,
  FCP: 1800,
  TTFB: 800
};

// Batch analytics calls for better performance
let analyticsQueue = [];
let isProcessing = false;

const processAnalyticsQueue = () => {
  if (isProcessing || analyticsQueue.length === 0) return;
  
  isProcessing = true;
  const batch = analyticsQueue.splice(0);
  
  // Process batch in next tick to avoid blocking UI
  setTimeout(() => {
    batch.forEach(metric => {
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    });
    isProcessing = false;
  }, 0);
};

const sendToAnalytics = (metric) => {
  // Log to console in development (with throttling)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value);
    
    const threshold = PERFORMANCE_THRESHOLDS[metric.name];
    if (threshold && metric.value > threshold) {
      console.warn(`[Performance] ${metric.name} is above ${threshold}${metric.name === 'CLS' ? '' : 'ms'} - Consider optimization`);
    }
  }

  // Add to queue for batch processing
  analyticsQueue.push(metric);
  
  // Process queue with debouncing
  requestIdleCallback ? requestIdleCallback(processAnalyticsQueue) : setTimeout(processAnalyticsQueue, 0);
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
  
  // Log initial page load time using modern Navigation Timing API
  window.addEventListener('load', () => {
    // Use modern Navigation Timing API if available
    if (performance.getEntriesByType && performance.getEntriesByType('navigation').length > 0) {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
      const loadTime = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
      console.log(`[Performance] Total page load time: ${Math.round(loadTime)}ms`);
      
      if (loadTime > 3000) {
        console.warn('[Performance] Page load time is above 3s - Consider further optimizations');
      }
    } else {
      // Fallback to deprecated API with suppression
      try {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`[Performance] Total page load time: ${loadTime}ms (fallback)`);
        
        if (loadTime > 3000) {
          console.warn('[Performance] Page load time is above 3s - Consider further optimizations');
        }
      } catch (e) {
        console.warn('[Performance] Could not measure page load time');
      }
    }
  });
};