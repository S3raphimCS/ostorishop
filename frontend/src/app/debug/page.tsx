'use client';
import { Carousel, Dropdown, Loading, ProgressBar } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Card, CardProps } from '@/entities/ui/card';
import Image from 'next/image';
import { BannerSection } from '@/widgets/banner-section';
import { ProductCategory } from '@/widgets/product-category';
import { ProductGrid } from '@/widgets/product-grid';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductOverview } from '@/widgets/product-overview';

export default function Debug() {
  const product = {
    id: 1,
    name: 'Samba OG Shoes',
    rating: 4.5,
    reviewsCount: 120,
    sizes: ['7', '8', '9', '10', '11'],
    price: 120,
    images: [
      '/categories-grid/men/clothing/jacket.jpg',
      '/categories-grid/men/clothing/jacket.jpg',
      '/categories-grid/men/clothing/jacket.jpg',
      '/categories-grid/men/clothing/jacket.jpg',
    ],
    description:
      'These are the classic Samba OG Shoes, perfect for casual wear.',
    details: {
      material: 'Leather',
      color: 'Black',
      brand: 'Adidas',
    },
    reviews: [
      { user: 'John Doeadasdadsasdsad', rating: 5, comment: 'Great shoes!' },
      {
        user: 'Jane Smiadsasdadsdsdsadth',
        rating: 4,
        comment: 'Very comfortable.',
      },
    ],
  };

  return (
    <div>
      <ProductOverview />
    </div>
  );
}
