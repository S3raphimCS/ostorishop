'use client';
import { Carousel, Dropdown, Loading, ProgressBar } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Card } from '@/entities/card';
import Image from 'next/image';
import { BannerSection } from '@/widgets/banner-section';
import { ProductCategory } from '@/widgets/product-category';

export default function Debug() {
  const images = ['boots2.jpg', 'boots2.jpg', '/boots3.jpg'];
  const alts = ['Кроссовки женские Athlex Ice', 'Alt 2', 'Alt 3'];
  const title = [
    'Кроссовки женские Athlex Ice',
    'Кроссовки женские Kappa Authentic Run Mesh',
    'Title3',
  ];
  const description = ['Кроссовки', 'Кроссовки', 'Кроссовки'];

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div>
      <BannerSection />
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
    </div>
  );
}
