'use client';
import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menShoesItems } from '@/entities/lib/data/categories/category-items';
import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';
import { NextSeo } from 'next-seo';

export default function MenShoesPage() {
  return (
    <>
      <NextSeo
        title="Обувь для мужчин - Купить качественную обувь | OstoriShop"
        description="Купите качественную обувь для мужчин в магазине OstoriShop. Широкий ассортимент стильной и комфортной обуви для каждого мужчины."
        openGraph={{
          title: 'Обувь для мужчин - Купить качественную обувь | OstoriShop',
          description:
            'Купите качественную обувь для мужчин в магазине OstoriShop. Широкий ассортимент стильной и комфортной обуви для каждого мужчины.',
          images: [
            {
              url: '/hero/men.png',
              alt: 'Обувь для мужчин - OstoriShop',
            },
          ],
          site_name: 'OstoriShop',
        }}
      />
      <main>
        <Hero
          heading="Шагай уверенно"
          subheading="в качественной обуви"
          description="Наш магазин предлагает качественную обувь для мужчин, которая подчеркнет ваш стиль и обеспечит комфорт на протяжении всего дня. Найдите свою идеальную пару в нашем ассортименте."
          imageSrc="/hero/men.png"
          imageAlt="Обувь для мужчин"
        />
        <div className="flex-column flex justify-center">
          <CategoriesGrid title="Обувь" items={menShoesItems} />
        </div>
        <BannerSection banners={menPageBanners} />
      </main>
    </>
  );
}
