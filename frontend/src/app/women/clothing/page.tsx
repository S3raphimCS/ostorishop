import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { womenClothingItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';

export default function WomenClothingPage() {
  return (
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
  );
}
