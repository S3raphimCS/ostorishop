import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { menShoesItems } from '@/entities/lib/data/categories/category-items';

import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';
import { Hero } from '@/shared/ui';

export default function MenShoesPage() {
  return (
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
  );
}
