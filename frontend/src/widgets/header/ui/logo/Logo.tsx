import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/shared/routing';

export const Logo = () => {
  return (
    <Link href={paths.home}>
      <Image
        alt="Ostori Shop"
        src={'/logo_debug.png'}
        width={'64'}
        height={'64'}
        priority
      ></Image>
    </Link>
  );
};
