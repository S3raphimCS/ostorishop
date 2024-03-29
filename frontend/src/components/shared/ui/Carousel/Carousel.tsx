import Image from 'next/image';

interface CarouselProps {
  images: string[];
  alt: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images, alt }) => {
  return (
    <div className="carousel carousel-center max-w-lg space-x-4 rounded-box bg-neutral p-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="carousel-item">
          <Image src={imageUrl} alt={alt[index]} width={500} height={400} />
        </div>
      ))}
    </div>
  );
};
