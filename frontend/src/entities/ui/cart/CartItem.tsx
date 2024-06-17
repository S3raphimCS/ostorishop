import { useDispatch } from 'react-redux';
import { combineClasses } from '@/shared/lib/style-worker';
import Link from 'next/link';
import Image from 'next/image';
import { paths } from '@/shared/routing';
import { Price } from '../price';
import {
  Color,
  ColorVariant,
} from '../filter/product-filters/color-filter/Color';
import { Size, SizeVariant } from '../filter/product-filters/size-filter/Size';
import { Icon } from '@/shared/ui';
import { removeFromCart, updateQuantity } from '@/features/cart';

export interface CartItemOption {
  name: string;
  value: string;
}

export interface CartItemProps {
  item: {
    id: number;
    name: string;
    path: string;
    variant: {
      image?: {
        url: string;
        alt?: string;
      };
    };
    price: number;
    quantity: number;
    options?: CartItemOption[];
  };
  variant?: 'default' | 'display';
  removing?: boolean;
  closeSidebarIfPresent?: () => void;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
  rest?: React.HTMLAttributes<HTMLLIElement>;
}

const placeholderImg = '/logo.png';

export const CartItem: React.FC<CartItemProps> = ({
  item,
  variant = 'default',
  removing = false,
  closeSidebarIfPresent,
  ...rest
}) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    path,
    variant: itemVariant,
    price,
    quantity,
    options,
  } = item;

  const handleRemove = () => {
    dispatch(removeFromCart({ id, options }));
  };

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id, options, quantity: quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, options, quantity: quantity - 1 }));
    }
  };

  return (
    <li
      className={combineClasses(
        'flex flex-col py-4',
        removing ? 'pointer-events-none opacity-50' : ''
      )}
      {...rest}
    >
      <div className="relative flex flex-row space-x-4 py-4">
        <div className="relative h-16 w-16 cursor-pointer">
          <Link href={paths.productSlug + id}>
            <Image
              onClick={closeSidebarIfPresent}
              className="rounded-lg object-cover"
              width={64}
              height={64}
              src={itemVariant?.image?.url || placeholderImg}
              alt={itemVariant?.image?.alt || 'Product Image'}
            />
          </Link>
          <button
            className="absolute -right-2 -top-2 rounded-full text-white"
            onClick={handleRemove}
          >
            <Icon icon="close" color="red" />
          </button>
        </div>
        <div className="flex flex-1 flex-col text-base">
          <div className="flex justify-between">
            <Link href={paths.productSlug + path}>
              <span className="font-semibold" onClick={closeSidebarIfPresent}>
                {name}
              </span>
            </Link>
            <Price price={price} className="ml-4" />
          </div>
          <div className="flex items-center justify-between">
            {options && options.length > 0 && (
              <div className="flex items-center">
                {options.map((option, i) => (
                  <div
                    key={`${id}-${option.name}`}
                    className="flex items-center text-sm font-semibold text-accent"
                  >
                    {option.name === 'Цвет' && (
                      <>
                        <Color
                          className="mr-2"
                          color={option.value as ColorVariant}
                        />
                        <span className="text-sm text-black">
                          {option.value as string}
                        </span>
                      </>
                    )}
                    {option.name === 'Размер' && (
                      <Size size={option.value as SizeVariant} />
                    )}
                    {i !== options.length - 1 && (
                      <span className="mx-1">/</span>
                    )}
                  </div>
                ))}
              </div>
            )}
            {variant === 'default' && (
              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-accent px-1">
                <button
                  className="rounded px-2 py-1"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  className="rounded px-2 py-1"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            )}
          </div>
          {variant === 'display' && (
            <div className="mt-2 text-sm tracking-wider">{quantity}x</div>
          )}
        </div>
      </div>
    </li>
  );
};
