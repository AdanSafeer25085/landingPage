import { useEffect } from 'react';
import { initPerformanceMonitoring, markPerformance } from '../utils/performanceMonitoring';

// Custom hook for performance monitoring
export const usePerformanceMonitoring = (componentName) => {
  useEffect(() => {
    // Mark component mount
    markPerformance(`${componentName}-mount-start`);
    
    // Initialize monitoring on first component mount
    if (componentName === 'App') {
      initPerformanceMonitoring();
    }
    
    return () => {
      // Mark component unmount
      markPerformance(`${componentName}-unmount`);
    };
  }, [componentName]);
  
  useEffect(() => {
    // Mark component mount complete
    markPerformance(`${componentName}-mount-complete`);
  });
};

// Hook for measuring component render time
export const useRenderTime = (componentName) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development' && renderTime > 16) {
        console.warn(`[Performance] ${componentName} render took ${renderTime.toFixed(2)}ms`);
      }
    };
  });
};

export default usePerformanceMonitoring;