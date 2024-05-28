import { CardProps } from '@/entities/ui/card';
import { ProductFilters } from '@/widgets/product-filters';
import { ProductGrid } from '@/widgets/product-grid';

const mockProducts: CardProps[] = [
  {
    title: 'Модель "Холли"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket8.jpg',
    alt: 'Jacket 2',
    price: 8999,
    rating: 4.5,
    reviewsCount: 4,
  },
  {
    title: 'Модель "Авангард"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket1.jpg',
    alt: 'Jacket 1',
    price: 5599,
    rating: 4.5,
    reviewsCount: 10,
  },
  {
    title: 'Модель "Пульсар"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket2.jpg',
    alt: 'Jacket 2',
    price: 7999,
    rating: 3.5,
    reviewsCount: 5,
  },
  {
    title: 'Модель "Стиллетто"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket3.jpg',
    alt: 'Jacket 2',
    price: 10999,
    rating: 4.0,
    reviewsCount: 5,
  },
  {
    title: 'Модель "Форсаж"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket4.jpg',
    alt: 'Jacket 2',
    price: 150,
    rating: 4.0,
    reviewsCount: 5,
  },
  {
    title: 'Модель "Авиатор"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket5.jpg',
    alt: 'Jacket 2',
    price: 150,
    rating: 4.0,
    reviewsCount: 5,
  },
  {
    title: 'Модель "Гранит"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket6.jpg',
    alt: 'Jacket 2',
    price: 150,
    rating: 4.0,
    reviewsCount: 5,
  },
  {
    title: 'Модель "Маршал"',
    imageUrl: '/categories-grid/men/clothing/jackets/jacket7.jpg',
    alt: 'Jacket 2',
    price: 150,
    rating: 4.0,
    reviewsCount: 5,
  },
];

export default function MenClothingJacketsPage() {
  return (
    <div className="flex justify-between">
      <ProductFilters />
      <div className="flex-1 p-4">
        <ProductGrid products={mockProducts} />
      </div>
    </div>
  );
}
