import { IconType } from 'react-icons';
import { FaHeart } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';

export type IconTypes = 'heart' | 'account';

interface IconProps {
  icon: IconTypes;
  size?: string | number;
  color?: string;
  className?: string;
}

const ICON_TYPES: Record<IconTypes, IconType> = {
  heart: FaHeart,
  account: RiAccountCircleFill,
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
