import Image from 'next/image';

interface ProductImagesProps {
  images: string[];
}

export const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-[1px]">
      {images.map((image: string, index: number) => (
        <div key={index} className="aspect-w-1 aspect-h-1 relative">
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};
