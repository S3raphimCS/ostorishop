'use client';
import { Banner } from '@/entities/banner';
import { Carousel } from '@/shared/ui';
import { paths } from '@/shared/routing';

const banners = [
  {
    imageUrl: 'Banner1.jpg',
    link: paths.promo('news1'),
    alt: 'Первый баннер',
  },
  {
    imageUrl: '/Banner2.jpg',
    link: paths.promo('news1'),
    alt: 'Второй баннер',
  },
  {
    imageUrl: '/Banner3.jpg',
    link: paths.promo('news1'),
    alt: 'Третий баннер',
  },
];

export const BannerSection = () => {
  return (
    <section>
      <Carousel
        id="banner"
        infinite
        animationType="fadeout"
        animationDuration={650}
        mouseTracking={false}
        disableDotsControls
      >
        {banners.map((banner, index) => (
          <Banner key={index} {...banner} />
        ))}
      </Carousel>
    </section>
  );
};
