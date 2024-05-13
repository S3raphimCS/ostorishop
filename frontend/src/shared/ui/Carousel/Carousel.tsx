'use client';
import { Icon, Button } from '@/shared/ui';
import { combineClasses } from '@/shared/lib/style-worker';
import AliceCarousel, { Responsive } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

interface CarouselProps {
  readonly id: string;
  readonly children: JSX.Element[] | Element[];
  readonly disableButtonsControls?: boolean;
  readonly autoPlay?: boolean;
  readonly infinite?: boolean;
  readonly animationType?: 'slide' | 'fadeout';
  readonly animationDuration?: number;
  readonly autoWidth?: boolean;
  readonly mouseTracking?: boolean;
  readonly responsive?: Responsive;
  readonly disableDotsControls?: boolean;
  readonly className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  id,
  children,
  disableButtonsControls,
  autoWidth,
  autoPlay,
  infinite,
  animationDuration,
  animationType,
  mouseTracking,
  responsive,
  disableDotsControls = true,
  className,
}) => {
  const classes = combineClasses(className);

  const isSmallOrMediumScreen = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
  };

  const renderNextButton = ({ isDisabled }: { isDisabled: boolean }) => {
    if (isSmallOrMediumScreen()) return null;
    return (
      <Button
        className="absolute right-2 top-1/2 translate-y-1/2 opacity-20 hover:opacity-100"
        variant={'accent'}
        size="responsive"
        circle
      >
        <Icon icon={'right-arrow'} size={'50%'} />
      </Button>
    );
  };

  const renderPrevButton = ({ isDisabled }: { isDisabled: boolean }) => {
    if (isSmallOrMediumScreen()) return null;
    return (
      <Button
        className="absolute left-2 top-1/2 translate-y-1/2 opacity-20 hover:opacity-100"
        variant={'accent'}
        size="responsive"
        circle
      >
        <Icon icon={'left-arrow'} size={'50%'} />
      </Button>
    );
  };

  return (
    <div className={classes}>
      <AliceCarousel
        controlsStrategy="responsive"
        animationType={animationType}
        autoPlay={autoPlay}
        disableButtonsControls={disableButtonsControls}
        infinite={infinite}
        autoWidth={autoWidth}
        animationDuration={animationDuration}
        mouseTracking={mouseTracking}
        responsive={responsive}
        items={children}
        disableDotsControls={disableDotsControls}
        //@ts-ignore
        renderPrevButton={renderPrevButton}
        //@ts-ignore
        renderNextButton={renderNextButton}
      />
    </div>
  );
};
