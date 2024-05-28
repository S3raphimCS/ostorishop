import { Button } from '@/shared/ui';
import Link from 'next/link';

export interface BannerProps {
  imageUrl: string;
  link?: string;
  alt?: string;
}

export const Banner: React.FC<BannerProps> = ({ imageUrl, link, alt }) => {
  return (
    <div>
      {link && (
        <Link
          className="absolute bottom-5 left-1/2 -translate-x-1/2 transform rounded-md px-4 py-2"
          href={link}
        >
          <Button size="responsive" variant={'accent'}>
            Подробнее
          </Button>
        </Link>
      )}
      <img
        className="h-56 w-full object-cover sm:h-auto md:h-80 lg:h-banner"
        src={imageUrl}
        alt={alt || 'Изображение баннера'}
      />
    </div>
  );
};
