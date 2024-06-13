'use client';
import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { womenClothingItems } from '@/entities/lib/data/categories/category-items';
import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';
import { NextSeo } from 'next-seo';

export default function WomenClothingPage() {
  return (
    <>
      <NextSeo
        title="Женская Верхняя Одежда | OstoriShop"
        description="Ощущай себя красивой в стильной верхней одежде. Погрузись в мир моды с нашим разнообразным выбором женской верхней одежды. Наш магазин предлагает высококачественные и модные варианты для каждой женщины."
        openGraph={{
          title: 'Женская Верхняя Одежда | OstoriShop',
          description:
            'Ощущай себя красивой в стильной верхней одежде. Погрузись в мир моды с нашим разнообразным выбором женской верхней одежды. Наш магазин предлагает высококачественные и модные варианты для каждой женщины.',
          images: [
            {
              url: '/hero/women.png',
              alt: 'Верхняя одежда для женщин',
            },
          ],
        }}
      />
      <main>
        <Hero
          heading="Ощущай себя красивой"
          subheading="в стильной верхней одежде"
          description="Погрузись в мир моды с нашим разнообразным выбором женской верхней одежды. Наш магазин предлагает высококачественные и модные варианты для каждой женщины."
          imageSrc="/hero/women.png"
          imageAlt="Верхняя одежда для женщин"
        />
        <div className="flex-column flex justify-center">
          <CategoriesGrid title="Верхняя одежда" items={womenClothingItems} />
        </div>
        <BannerSection banners={menPageBanners} />
      </main>
    </>
  );
}
