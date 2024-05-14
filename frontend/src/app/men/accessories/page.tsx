import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menAccessoriesItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';

export default function MenClothingPage() {
  return (
    <main>
      <BannerSection banners={menPageBanners} />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Аксессуары" items={menAccessoriesItems} />
      </div>
    </main>
  );
}
