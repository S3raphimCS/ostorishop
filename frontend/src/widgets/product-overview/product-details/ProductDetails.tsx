'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Icon, Rating } from '@/shared/ui';
import { CardPlate, CardPlateVariant } from '@/entities/ui/card';
import { Product } from '@/entities/model';
import { Price } from '@/entities/ui/price';
import {
  Color,
  ColorVariant,
} from '@/entities/ui/filter/product-filters/color-filter/Color';
import { addToCart } from '@/features/cart';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          variant: {
            image: {
              url: product.images[0],
              alt: product.name,
            },
          },
          options: [
            { name: 'Цвет', value: product.color as string },
            { name: 'Размер', value: selectedSize as string },
          ],
          path: product.id,
        })
      );
    }
  };

  const discountPlate = product.cardPlates?.find(
    (plate) => plate.variant === 'discount'
  ) as
    | { variant: CardPlateVariant; label: string; discountPrice: number }
    | undefined;
  const discountPrice = discountPlate?.discountPrice;

  return (
    <aside className="sticky top-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          {product.manufacturer}
        </h1>
        <Button
          variant="default"
          size={'tiny'}
          className="border-0	bg-base-100 shadow-none hover:bg-base-100 hover:shadow-none"
        >
          <Icon icon={'heart-outline'} />
        </Button>
      </div>
      <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
      <div className="mt-2">
        <Rating
          label="отзывов"
          rating={product.rating}
          reviewsCount={product.reviewsCount}
        />
        <div className="flex flex-wrap gap-2">
          {product.cardPlates?.map(
            (
              plate: { variant: CardPlateVariant; label: string },
              index: number
            ) => (
              <CardPlate
                key={index}
                variant={plate.variant}
                label={plate.label}
                className="mt-2"
              />
            )
          )}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Размеры</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((size: string) => (
            <Button
              outline
              variant="default"
              key={size}
              className={`border px-4 py-2 ${selectedSize === size ? 'bg-black text-white' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {discountPrice ? (
          <div className="flex flex-col">
            <Price
              className="text-2xl line-through decoration-red-500/70"
              price={product.price}
            />
            <Price className="text-3xl font-bold" price={discountPrice} />
          </div>
        ) : (
          <Price className="text-2xl font-bold" price={product.price} />
        )}
      </div>
      <div className="mt-4 flex gap-4">
        <Button
          variant="accent"
          className="text-base-100"
          disabled={!selectedSize}
          onClick={handleAddToCart}
        >
          Добавить в корзину
        </Button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Характеристики</h2>
        <ul className="mt-2 flex list-inside list-none flex-col gap-2 text-lg">
          <li>Материал: {product.material}</li>
          <li className="flex">
            Цвет:
            <div className="ml-2 flex items-center gap-2">
              <Color color={product.color as ColorVariant} />
              {product.color}
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
