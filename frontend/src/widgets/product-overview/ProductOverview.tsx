import { ProductImages } from './product-images/ProductImages';
import { ProductDetails } from './product-details/ProductDetails';
import { ProductDescription } from './product-description/ProductDescription';
import { ProductReviews } from './product-reviews/ProductReviews';
import { Product } from '@/entities/model';

const product: Product = {
  id: 1,
  name: 'Холли',
  rating: 4.5,
  reviewsCount: 4,
  manufacturer: 'Some Brand',
  sizes: ['42', '44', '46', '48', '50', '52'],
  price: 8999,
  discountPrice: 8883,
  images: [
    '/categories-grid/men/clothing/jackets/jacket8.jpg',
    '/categories-grid/men/clothing/jackets/jacket8.jpg',
    '/categories-grid/men/clothing/jackets/jacket8.jpg',
    '/categories-grid/men/clothing/jackets/jacket8.jpg',
  ],
  material: 'Хлопок',
  color: 'Зелёный',
  description: 'These are the classic Samba OG Shoes, perfect for casual wear.',
  reviews: [
    {
      user: 'Дмитрий Лукьянов',
      rating: 5,
      pros: 'Отличное качество',
      cons: 'Нет',
      comment: 'Супер!',
      date: '2024-05-01',
    },
    {
      user: 'Василий Чах',
      rating: 4,
      pros: 'Хороший дизайн',
      cons: 'Неудобные шнурки',
      comment: 'Супер!',
      date: '2024-04-21',
    },
    {
      user: 'Назар Петров',
      rating: 4.5,
      pros: 'Комфортные',
      cons: 'Цена',
      comment: 'Супер!',
      date: '2024-03-15',
    },
    {
      user: 'Николай Золотов',
      rating: 4,
      pros: 'Стильные',
      cons: 'Маркие',
      comment: 'Супер!',
      date: '2024-02-10',
    },
  ],
};

export const ProductOverview = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProductImages images={product.images} />
        </div>
        <div className="md:col-span-1">
          <ProductDetails product={product} />
        </div>
      </div>
      <ProductDescription className="mt-6" description={product.description} />
      <ProductReviews
        className="mt-6"
        productRating={product.rating}
        reviews={product.reviews}
      />
    </div>
  );
};
