import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { womenAccessoriesItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';

export default function WomenAccessoriesPage() {
  return (
    <main>
      <Hero
        heading="Дополни свой образ"
        subheading="с нашими стильными аксессуарами"
        description="Наш магазин предлагает широкий выбор аксессуаров, которые подчеркнут твою индивидуальность и украсят любой образ."
        imageSrc="/hero/women.png"
        imageAlt="Аксессуары для женщин"
      />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Аксессуары" items={womenAccessoriesItems} />
      </div>
      <BannerSection banners={menPageBanners} />
    </main>
  );
}
