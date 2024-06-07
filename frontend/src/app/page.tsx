import { mainPageBanners } from '@/widgets/banner-section/lib/config';
import { BannerSection } from '@/widgets/banner-section';
import { ProductCategory } from '@/widgets/product-category';
import { Card } from '@/entities/ui/card';
import { CarouselNoSSR, Hero } from '@/shared/ui/';
import { menShortsProducts } from '@/app-wrapper/types/mocks';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};

export default function Home() {
  return (
    <main>
      <Hero
        heading={'Модная одежда для каждого'}
        subheading={'Откройте для себя мир стиля и комфорта'}
        description={
          'Наш магазин предлагает широкий выбор модной одежды для всей семьи. Независимо от возраста или стиля, у нас вы найдете идеальное сочетание качества, комфорта и стиля. Погружайтесь в моду с нашими новинками и классическими вариантами, которые подчеркнут вашу индивидуальность и вкус.'
        }
        imageSrc={'/hero/main.png'}
        imageAlt={'Модная одежда'}
      />
      <BannerSection banners={mainPageBanners} />
      <div className="flex-column flex justify-center">
        <ProductCategory className="w-11/12" title={'Летний сезон!'}>
          <CarouselNoSSR responsive={responsive} id={'dd'}>
            {menShortsProducts.map((product, index) => (
              <div className="pb-4 pl-2 pr-2">
                <Card
                  id={product.id}
                  key={index}
                  imageUrl={product.imageUrl}
                  alt={product.alt}
                  title={product.title}
                  rating={product.rating}
                  reviewsCount={product.reviewsCount}
                  price={product.price}
                />
              </div>
            ))}
          </CarouselNoSSR>
        </ProductCategory>
      </div>
    </main>
  );
}
