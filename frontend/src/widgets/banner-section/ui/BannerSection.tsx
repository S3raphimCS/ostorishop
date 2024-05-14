'use client';
import { Banner, BannerProps } from '@/entities/ui/banner';
import { Carousel } from '@/shared/ui';

interface BannerSectionProps {
  banners: BannerProps[];
}

export const BannerSection: React.FC<BannerSectionProps> = ({ banners }) => {
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
