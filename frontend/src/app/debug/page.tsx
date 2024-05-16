'use client';
import { Carousel, Dropdown, Loading, ProgressBar } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Card, CardProps } from '@/entities/ui/card';
import Image from 'next/image';
import { BannerSection } from '@/widgets/banner-section';
import { ProductCategory } from '@/widgets/product-category';
import { ProductGrid } from '@/widgets/product-grid';
import { ProductFilters } from '@/widgets/product-filters';

export default function Debug() {
  const mockProducts: CardProps[] = [
    {
      title: 'Jacket 1',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 1',
      price: 100,
      rating: 4.5,
      reviewsCount: 10,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      title: 'Jacket 2',
      imageUrl: '/categories-grid/men/clothing/jacket.jpg',
      alt: 'Jacket 2',
      price: 150,
      rating: 4.0,
      reviewsCount: 5,
    },
  ];

  return (
    <div>
      <div className="flex-column flex justify-center"></div>
      <div className="mx-4 my-4 flex items-center gap-12">
        <Button variant={'primary'} size={'small'}>
          Debug test 2
        </Button>
        <Button variant={'secondary'} size={'normal'}>
          Debug test 3
        </Button>
        <Button variant={'accent'} size={'normal'}>
          Debug test 3
        </Button>
        <Button variant={'delete'} size={'wide'}>
          Debug test 4
        </Button>
        <Button variant={'default'} size={'tiny'}>
          Debug test 5
        </Button>
        <Button variant={'success'} size={'large'} outline>
          Debug test 1
        </Button>
        <br></br>
        <br></br>
      </div>
      <div className="mx-8 my-5 flex gap-9">
        <Loading form="spinner" size="lg" color="success"></Loading>
        <Loading form="ball" size="md" color="warning"></Loading>
        <Loading form="bars" size="lg" color="info"></Loading>
        <Loading form="infinity" size="md" color="error"></Loading>
        <Loading form="ring" size="xs" color="accent"></Loading>
      </div>
      <div className="mx-auto my-4 max-w-lg">
        <ProgressBar value={65} color="primary" />
        <ProgressBar value={10} color="secondary" />
        <ProgressBar value={32} color="error" />
      </div>
      <div className="flex justify-between">
        <ProductFilters />
        <div className="flex-1 p-4">
          <ProductCategory title={'Куртки'}>
            <ProductGrid products={mockProducts} />
          </ProductCategory>
        </div>
      </div>
    </div>
  );
}
