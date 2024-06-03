'use client';
import { useSelector } from 'react-redux';
import { selectFavorites } from '@/features/wishlist';
import Image from 'next/image';
import { ProductGrid } from '@/widgets/product-grid';
import Link from 'next/link';
import { Button } from '@/shared/ui';

export default function MenClothingJacketsPage() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Список желаемого</h1>
      {favorites.length > 0 ? (
        <ProductGrid products={favorites} />
      ) : (
        <div className="flex h-96 items-center sm:mt-14 md:mt-0">
          <div className="container flex flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
            <div className="max-w-md">
              <div className="font-dark text-3xl font-bold">А здесь пусто!</div>
              <p className="mb-8 mt-4 md:text-xl">
                Вперёд покорять мир шопинга! Вы обязательно найдёте подходящий
                товар.
              </p>
              <Link href={'/'}>
                <Button className="mb-6" variant={'accent'}>
                  Вернуться на главную
                </Button>
              </Link>
            </div>
            <div className="max-w-lg">
              <Image
                width={200}
                height={200}
                src="/empty_wishlist.png"
                alt="Пустой список желаемого"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
