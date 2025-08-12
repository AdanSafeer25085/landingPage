import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholderSrc = null,
  threshold = 100,
  ...props 
}) => {
  const lowQualityPlaceholder = placeholderSrc || `data:image/svg+xml,%3Csvg width='${width || 100}' height='${height || 100}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3C/svg%3E`;

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      placeholderSrc={lowQualityPlaceholder}
      effect="blur"
      threshold={threshold}
      {...props}
    />
  );
};

export default OptimizedImage;