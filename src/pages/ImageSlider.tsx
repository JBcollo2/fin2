import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Debug: Log images on mount
  useEffect(() => {
    console.log('Slider images:', images);
  }, [images]);
  
  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Handle image load
  const handleImageLoad = () => {
    setLoading(false);
    setError(null);
  };
  
  const handleImageError = (src) => {
    console.error(`Failed to load image: ${src}`);
    setError(`Failed to load image: ${src}`);
    setLoading(false);
  };
  
  return (
    <div className="relative bg-futuristic-dark w-full max-w-5xl mx-auto">
      {/* Debug info */}
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-2 text-center z-50">
          {error}
        </div>
      )}
      
      {/* Image container - increased height and added padding */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-gray-800">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 p-4 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="w-full h-full object-contain" // Using object-contain to show full image
              onLoad={handleImageLoad}
              onError={() => handleImageError(img.src)}
            />
          </div>
        ))}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      
      {/* Indicator dots */}
      <div className="absolute bg-inherit bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;