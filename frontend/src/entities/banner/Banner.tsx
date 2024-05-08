import { Button } from '@/shared/ui';
import Link from 'next/link';

interface BannerProps {
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
        className="lg:h-banner h-56 w-full object-cover sm:h-auto md:h-80"
        src={imageUrl}
        alt={alt || 'Изображение баннера'}
      />
    </div>
  );
};
