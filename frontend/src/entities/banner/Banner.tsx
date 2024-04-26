'use client';
import { Carousel } from '@/shared/ui';

export const Banner = () => {
  const images = ['/Banner1.jpg', '/Banner2.jpg', '/Banner3.jpg'];
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    1024: {
      items: 3,
      itemsFit: 'contain',
    },
  };

  return (
    <div>
      <Carousel
        id="banner"
        mouseTracking={false}
        autoWidth
        responsive={responsive}
        disableDotsControls
      >
        {images.map((imageUrl, index) => (
          <img
            className="h-56 w-full object-cover sm:h-auto md:h-80 lg:h-96"
            src={imageUrl}
            key={index}
          />
        ))}
      </Carousel>
    </div>
  );
};
