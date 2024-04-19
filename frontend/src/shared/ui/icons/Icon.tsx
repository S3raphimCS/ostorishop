import { IconType } from 'react-icons';
import {
  FaHeart,
  FaSun,
  FaMoon,
  FaSearch,
  FaShoppingBag,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

export type IconTypes =
  | 'heart'
  | 'profile'
  | 'search'
  | 'cart'
  | 'location'
  | 'lightTheme'
  | 'darkTheme';

interface IconProps {
  icon: IconTypes;
  size?: string | number;
  color?: string;
  className?: string;
}

const ICON_TYPES: Record<IconTypes, IconType> = {
  heart: FaHeart,
  profile: RiAccountCircleFill,
  search: FaSearch,
  cart: FaShoppingBag,
  location: FaMapMarkerAlt,
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
