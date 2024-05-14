import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menShoesItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';

export default function MenShoesPage() {
  return (
    <main>
      <BannerSection banners={menPageBanners} />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Обувь" items={menShoesItems} />
      </div>
    </main>
  );
}
