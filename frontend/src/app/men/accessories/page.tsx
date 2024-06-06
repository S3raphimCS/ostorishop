import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menAccessoriesItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';

export default function MenClothingPage() {
  return (
    <main>
      <Hero
        heading="Открой для себя стиль"
        subheading="с аксессуарами для мужчин!"
        description="Привлекательные и функциональные аксессуары для современного мужчины. Наш магазин предлагает широкий ассортимент, чтобы вы могли выразить свой уникальный стиль с легкостью и уверенностью."
        imageSrc="/hero/men.png"
        imageAlt="Аксессуары для мужчин"
      />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Аксессуары" items={menAccessoriesItems} />
      </div>
      <BannerSection banners={menPageBanners} />
    </main>
  );
}
