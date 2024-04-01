import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel carousel-center mx-auto max-w-lg space-x-4 rounded-box bg-neutral p-4 px-4 sm:max-w-xl sm:px-6 md:max-w-2xl lg:max-w-4xl lg:px-8 xl:max-w-6xl">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="carousel-item">
          {child}
        </div>
      ))}
    </div>
  );
};
