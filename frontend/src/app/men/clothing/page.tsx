import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menClothingItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';

export default function MenClothingPage() {
  return (
    <main>
      <Hero
        heading="Одевайся стильно"
        subheading="с коллекцией верхней одежды"
        description="Наш магазин предлагает широкий ассортимент стильной и качественной верхней одежды для мужчин. Обнови свой гардероб с нами и подчеркни свой неповторимый стиль в любой ситуации."
        imageSrc="/hero/men.png"
        imageAlt="Верхняя одежда для мужчин"
      />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Верхняя одежда" items={menClothingItems} />
      </div>
      <BannerSection banners={menPageBanners} />
    </main>
  );
}
