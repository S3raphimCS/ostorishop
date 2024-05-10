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
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';
import { SlSocialVkontakte } from 'react-icons/sl';
import { IoIosCloseCircle, IoLogoWhatsapp } from 'react-icons/io';
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
  | 'darkTheme'
  | 'youtube'
  | 'instagram'
  | 'telegram'
  | 'whatsapp'
  | 'vkontakte';

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
  instagram: FaInstagram,
  youtube: FiYoutube,
  telegram: FaTelegram,
  whatsapp: IoLogoWhatsapp,
  vkontakte: SlSocialVkontakte,
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
