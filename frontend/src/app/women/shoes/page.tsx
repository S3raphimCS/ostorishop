import { Hero } from '@/shared/ui';
import { menPageBanners } from '@/widgets/banner-section/lib/config';
import { womenShoesItems } from '@/entities/lib/data/categories/category-items';
import { BannerSection } from '@/widgets/banner-section';
import { CategoriesGrid } from '@/widgets/categories-grid';

export default function WomenShoesPage() {
  return (
    <main>
      <Hero
        heading="Шагай с уверенностью"
        subheading="в стильной обуви"
        description="Открой для себя коллекцию модной обуви для женщин в нашем магазине. Независимо от того, нужны вам кроссовки, сандалии или каблуки, у нас есть идеальная пара для каждого случая."
        imageSrc="/hero/women.png"
        imageAlt="Обувь для женщин"
      />
      <div className="flex-column flex justify-center">
        <CategoriesGrid title="Обувь" items={womenShoesItems} />
      </div>
      <BannerSection banners={menPageBanners} />
    </main>
  );
}
