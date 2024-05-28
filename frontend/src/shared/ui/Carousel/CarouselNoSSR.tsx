import dynamic from 'next/dynamic';
import { Loading } from '../loading/Loading';

export const CarouselNoSSR = dynamic(
  () => import('../carousel/Carousel').then((module) => module.Carousel),
  {
    ssr: false,
    loading: () => {
      return <Loading form="bars" size="lg" color="accent" />;
    },
  }
);
