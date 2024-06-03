import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/shared/routing';

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ width = 64, height = 64 }) => {
  return (
    <Link href={paths.home}>
      <Image
        alt="Logo Ostori Shop"
        src={'/logo.png'}
        width={width}
        height={height}
        priority
      ></Image>
    </Link>
  );
};
