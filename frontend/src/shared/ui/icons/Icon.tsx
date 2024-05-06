import { IconType } from 'react-icons';
import {
  FaHeart,
  FaRegHeart,
  FaSun,
  FaMoon,
  FaSearch,
  FaShoppingBag,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import { RiAccountCircleFill } from 'react-icons/ri';

export type IconTypes =
  | 'close'
  | 'heart-outline'
  | 'heart'
  | 'empty-star'
  | 'star'
  | 'half-star'
  | 'profile'
  | 'search'
  | 'cart'
  | 'location'
  | 'left-arrow'
  | 'right-arrow'
  | 'lightTheme'
  | 'darkTheme';

interface IconProps {
  icon: IconTypes;
  size?: string | number;
  color?: string;
  className?: string;
}

const ICON_TYPES: Record<IconTypes, IconType> = {
  close: IoIosCloseCircle,
  heart: FaHeart,
  'heart-outline': FaRegHeart,
  'empty-star': FaRegStar,
  star: FaStar,
  'half-star': FaStarHalfAlt,
  profile: RiAccountCircleFill,
  search: FaSearch,
  cart: FaShoppingBag,
  location: FaMapMarkerAlt,
  'left-arrow': FaArrowLeft,
  'right-arrow': FaArrowRight,
  lightTheme: FaSun,
  darkTheme: FaMoon,
};

export const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color = 'black',
  className = '',
}) => {
  const IconComponent = ICON_TYPES[icon];

  return (
    <IconComponent
      size={size}
      color={color}
      className={`inline-block ${className}`}
    />
  );
};
