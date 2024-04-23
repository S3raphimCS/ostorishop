'use client';
import { Carousel } from '@/shared/ui';
import Image from 'next/image';

export default function Home() {
  const images = ['/Banner1.jpg', '/Banner2.jpg', '/Banner3.jpg'];

  return (
    <main>
      <div>
        <Carousel
          mouseTracking={false}
          autoWidth
          disableDotsControls
          countVisibleElements={1}
        >
          {images.map((imageUrl, index) => (
            <Image src={imageUrl} width={1920} height={1080} alt={'ss'} />
          ))}
        </Carousel>
      </div>
    </main>
  );
}
