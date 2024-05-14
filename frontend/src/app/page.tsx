import { mainPageBanners } from '@/widgets/banner-section/lib/config';
import { BannerSection } from '@/widgets/banner-section';
import { ProductCategory } from '@/widgets/product-category';
import { Card } from '@/entities/ui/card';
import { CarouselNoSSR } from '@/shared/ui/';

const images = ['boots2.jpg', 'boots2.jpg', '/boots3.jpg'];
const alts = ['Кроссовки женские Athlex Ice', 'Alt 2', 'Alt 3'];
const title = [
  'Кроссовки женские Athlex Ice',
  'Кроссовки женские Kappa Authentic Run Mesh',
  'Title3',
];
const description = ['Кроссовки', 'Кроссовки', 'Кроссовки'];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Home() {
  return (
    <main>
      <BannerSection banners={mainPageBanners} />
      <div className="flex-column flex justify-center">
        <ProductCategory title={'Подобрано для вас'}>
          <CarouselNoSSR responsive={responsive} id={'dd'}>
            {images.map((imageUrl, index) => (
              <Card
                key={index}
                imageUrl={imageUrl}
                alt={alts[index]}
                title={title[index]}
                rating={3.4}
                reviewsCount={10}
                price={5425}
                cardPlates={[
                  {
                    variant: 'discount',
                    label: '-20%',
                    discountPrice: 4231,
                  },
                  {
                    variant: 'popular',
                    label: 'Популярное',
                  },
                ]}
              />
            ))}
          </CarouselNoSSR>
        </ProductCategory>
      </div>
    </main>
  );
}
