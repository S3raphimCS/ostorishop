'use client';
import { useState, useEffect } from 'react';
import { Icon, Input, InputLabel } from '@/shared/ui';
import { ProductCardSearch } from './ProductCardSearch';
import { productDetails } from '@/app-wrapper/types/mocks';

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productDetails);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts([]);
    } else {
      const results = productDetails.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results.slice(0, 2));
    }
  }, [searchTerm]);

  return (
    <div className="relative">
      <InputLabel>
        <Input
          className="sm:w-48 md:w-64 lg:w-96"
          type="text"
          placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Icon icon="search" color="black" />
      </InputLabel>
      {searchTerm && filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 z-10 mt-2 bg-white shadow-lg">
          {filteredProducts.map((product) => (
            <ProductCardSearch
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              discountPrice={product.discountPrice}
              image={product.images[0]}
            />
          ))}
        </div>
      )}
    </div>
  );
};
